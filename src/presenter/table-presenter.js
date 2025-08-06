import { render, RenderPosition } from '../framework/render.js';
import { NoPointMessage } from '../const.js';
import SortView from '../view/sort-view.js';
import ItineraryPointListView from '../view/itinerary-point-list-view.js';
import NoPointView from '../view/no-point-view.js';
import PointPresenter from './point-presenter.js';


export default class TablePresenter {

  #itineraryPointListComponent = new ItineraryPointListView();
  #tableContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #points = null;
  #destinations = null;
  #offers = null;
  #sortComponent = new SortView();
  #noPointComponent = new NoPointView({ message: NoPointMessage.EVERYTHING });

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

  #renderSort() {
    render(this.#sortComponent, this.#tableContainer, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(data) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#itineraryPointListComponent.element,
    });

    pointPresenter.init(data);
  }

  #renderPoints() {
    this.#points.forEach((point) => this.#renderPoint({ point, destinations: this.#destinations, offers: this.#offers }));
  }

  #renderPointList() {
    this.#renderPoints(0, this.#points.length);
  }

  #renderNoPoints() {
    render(this.#noPointComponent, this.#tableContainer);
  }

  #renderTable() {

    render(this.#itineraryPointListComponent, this.#tableContainer);

    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPointList();
  }
}
