import { render } from './render.js';
import FilterView from './view/filter-view.js';
import TablePresenter from './presenter/table-presenter.js';
import PointsModel from './model/points-model.js';


const pageTripControlsContainer = document.querySelector('.trip-controls');
const pageFilterContainer = pageTripControlsContainer.querySelector('.trip-controls__filters');

const pageTripEventsContainer = document.querySelector('.trip-events');
const pointsModel = new PointsModel();

const tablePresenter = new TablePresenter(
  {
    tableContainer: pageTripEventsContainer,
    pointsModel
  });

render(new FilterView, pageFilterContainer);

tablePresenter.init();
