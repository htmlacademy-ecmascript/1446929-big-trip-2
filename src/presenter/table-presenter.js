import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import EditItineraryPointView from '../view/edit-itinerary-point-view.js';
import ItineraryPointListView from '../view/itinerary-point-list-view.js';
import ItineraryPointView from '../view/itinerary-point-view.js';

export default class TablePresenter {

  itineraryPointListComponent = new ItineraryPointListView();

  constructor({ tableContainer, pointsModel, destinationsModel, offersModel }) {
    this.tableContainer = tableContainer;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.points = this.pointsModel.getPoints();
    this.destinations = this.destinationsModel.getDestinations();
    this.offers = this.offersModel.getOffers();

    render(new SortView(), this.tableContainer);
    render(this.itineraryPointListComponent, this.tableContainer);
    render(new EditItineraryPointView(), this.itineraryPointListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new ItineraryPointView(
        {
          point: this.points[i],
          destinations: this.destinations,
          offers: this.offers
        }), this.itineraryPointListComponent.getElement());
    }
  }
}
