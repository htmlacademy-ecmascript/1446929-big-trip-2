import { render, RenderPosition } from './framework/render.js';
import PointInfoView from './view/point-info-view.js';
import FilterView from './view/filter-view.js';
import TablePresenter from './presenter/table-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import { generateFilter } from './mock/filter.js';

const pageHeaderContainer = document.querySelector('.trip-main');

const pageTripEventsContainer = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const filters = generateFilter(pointsModel.points);

const tablePresenter = new TablePresenter(
  {
    tableContainer: pageTripEventsContainer,
    pointsModel,
    destinationsModel,
    offersModel
  });

render(new PointInfoView, pageHeaderContainer, RenderPosition.AFTERBEGIN);

render(new FilterView({ filters }), pageHeaderContainer);

tablePresenter.init();
