import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils/common.js';
import { NoPointMessage } from '../const.js';
import SortView from '../view/sort-view.js';
import EditItineraryPointView from '../view/edit-itinerary-point-view.js';
import ItineraryPointListView from '../view/itinerary-point-list-view.js';
import ItineraryPointView from '../view/itinerary-point-view.js';
import NoPointView from '../view/no-point-view.js';


export default class TablePresenter {

  #itineraryPointListComponent = new ItineraryPointListView();
  #tableContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #points = null;
  #destinations = null;
  #offers = null;

  constructor({ tableContainer, pointsModel, destinationsModel, offersModel }) {
    this.#tableContainer = tableContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#points = this.#pointsModel.getPoints();
    this.#destinations = this.#destinationsModel.getDestinations();
    this.#offers = this.#offersModel.getOffers();

    this.#renderTable();
  }

  #renderPoint({ point, destinations, offers }) {

    const escKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new ItineraryPointView({
      point,
      destinations,
      offers,
      onEditPointClick: () => {
        replacePointToEditForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    const pointEditComponent = new EditItineraryPointView({
      point,
      destinations,
      offers,
      onEditFormClick: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onEditFormSubmit: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToEditForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceEditFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#itineraryPointListComponent.element);
  }

  #renderTable() {
    render(new SortView(), this.#tableContainer);
    render(this.#itineraryPointListComponent, this.#tableContainer);

    if (this.#points.length === 0) {
      render(new NoPointView({ message: NoPointMessage.EVERYTHING }), this.#tableContainer);
      return;
    }

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint({ point: this.#points[i], destinations: this.#destinations, offers: this.#offers });
    }
  }
}
