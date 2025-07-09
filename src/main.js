import { render } from './render.js';
import FilterView from './view/filter-view.js';
import TablePresenter from './presenter/table-presenter.js';


const pageTripControlsContainer = document.querySelector('.trip-controls');
const pageFilterContainer = pageTripControlsContainer.querySelector('.trip-controls__filters');

const pageMainContainer = document.querySelector('.page-main');
const pageTripEventsContainer = pageMainContainer.querySelector('.page-body__container .trip-events');


const tablePresenter = new TablePresenter({ tableContainer: pageTripEventsContainer });

render(new FilterView, pageFilterContainer);

tablePresenter.init();
