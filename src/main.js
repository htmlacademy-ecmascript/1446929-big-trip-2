import { render } from './render.js';
import FilterView from './view/filter-view.js';
import TablePresenter from './presenter/table-presenter.js';


const pageTripControlsContainer = document.querySelector('.trip-controls');
const pageFilterContainer = pageTripControlsContainer.querySelector('.trip-controls__filters');

const pageTripEventsContainer = document.querySelector('.trip-events');


const tablePresenter = new TablePresenter({ tableContainer: pageTripEventsContainer });

render(new FilterView, pageFilterContainer);

tablePresenter.init();
