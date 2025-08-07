import { render, replace, remove } from '../framework/render.js';
import { isEscapeKey } from '../utils/common.js';
import ItineraryPointView from '../view/itinerary-point-view.js';
import EditItineraryPointView from '../view/edit-itinerary-point-view.js';


export default class PointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #data = null;

  constructor({ pointListContainer, onDataChange }) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
  }

  init(data) {
    this.#data = data;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;


    this.#pointComponent = new ItineraryPointView({
      ...this.#data,
      onEditPointClick: this.#handleEditPointClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EditItineraryPointView({
      ...this.#data,
      onEditFormClick: this.#handleEditFormSubmit,
      onEditFormSubmit: this.#handleEditFormSubmit,
    });


    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#pointListContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointListContainer.contains(prevPointEditComponent.element)) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }


  #replacePointToEditForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceEditFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replaceEditFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleEditPointClick = () => {
    this.#replacePointToEditForm();
  };

  #handleEditFormSubmit = (point) => {
    this.#handleDataChange({
      ...this.#data,
      point
    });
    this.#replaceEditFormToPoint();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({
      ...this.#data,
      point: {
        ...this.#data.point,
        isFavorite: !this.#data.point.isFavorite
      }
    });
  };
}

