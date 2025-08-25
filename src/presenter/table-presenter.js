import { render, RenderPosition, remove } from '../framework/render.js';
import { NoPointMessage } from '../const.js';
import { updateItem } from '../utils/common.js';
import { SortType } from '../const.js';
import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import NoPointView from '../view/no-point-view.js';
import PointPresenter from './point-presenter.js';
import { sortPointsByPrice, sortPointsByTime, sortPointsByDate } from '../utils/point.js';

export default class TablePresenter {

  #PointListComponent = new PointListView();
  #tableContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #points = null;
  #destinations = null;
  #offers = null;
  #sortComponent = null;
  #noPointComponent = new NoPointView({ message: NoPointMessage.EVERYTHING });
  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;
  #sourceTablePoints = [];

  constructor({ tableContainer, pointsModel, destinationsModel, offersModel }) {
    this.#tableContainer = tableContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points].sort(sortPointsByDate);
    this.#destinations = [...this.#destinationsModel.destinations];
    this.#offers = [...this.#offersModel.offers];
    this.#sourceTablePoints = [...this.#pointsModel.points];

    this.#renderTable();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleDataChange = (updatedData) => {
    this.#points = updateItem(this.#points, updatedData.point);
    this.#sourceTablePoints = updateItem(this.#sourceTablePoints, updatedData.point);
    this.#pointPresenters.get(updatedData.point.id).init(updatedData);
  };

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.PRICE:
        this.#points.sort(sortPointsByPrice);
        break;
      case SortType.TIME:
        this.#points.sort(sortPointsByTime);
        break;
      default:
        this.#points = [...this.#sourceTablePoints].sort(sortPointsByDate);
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#clearSort();
    this.#renderTable();
  };

  #clearSort() {
    remove(this.#sortComponent);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#tableContainer, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(data) {
    const { point } = data;
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#PointListComponent.element,
      onDataChange: this.#handleDataChange,
      onModeChange: this.#handleModeChange
    });


    pointPresenter.init(data);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    this.#points.forEach((point) => this.#renderPoint({
      point,
      destinations: this.#destinations,
      offers: this.#offers,
    }));
  }

  #renderPointList() {
    this.#renderPoints(0, this.#points.length);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderNoPoints() {
    render(this.#noPointComponent, this.#tableContainer);
  }

  #renderTable() {

    render(this.#PointListComponent, this.#tableContainer);

    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPointList();
  }
}
