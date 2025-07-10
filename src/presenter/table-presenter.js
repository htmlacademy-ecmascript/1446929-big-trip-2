import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import EditItineraryPointView from '../view/edit-itinerary-point-view.js';
import ItineraryPointListView from '../view/itinerary-point-list-view.js';
import ItineraryPointView from '../view/itinerary-point-view.js';

const ITINERARY_POINT_COUNT = 3;

export default class TablePresenter {

  itineraryPointListComponent = new ItineraryPointListView();

  constructor({ tableContainer }) {
    this.tableContainer = tableContainer;
  }

  init() {
    render(new SortView(), this.tableContainer);
    render(this.itineraryPointListComponent, this.tableContainer);
    render(new EditItineraryPointView(), this.itineraryPointListComponent.getElement());

    for (let i = 0; i < ITINERARY_POINT_COUNT; i++) {
      render(new ItineraryPointView(), this.itineraryPointListComponent.getElement());
    }
  }
}
