import { render } from './render.js';
import FilterView from './view/filter-view.js';
import TablePresenter from './presenter/table-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';

const pageFilterContainer = document.querySelector('.trip-controls__filters');

const pageTripEventsContainer = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();

const tablePresenter = new TablePresenter(
  {
    tableContainer: pageTripEventsContainer,
    pointsModel,
    destinationsModel,
    offersModel
  });

render(new FilterView, pageFilterContainer);

tablePresenter.init();
