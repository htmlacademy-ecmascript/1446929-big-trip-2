import AbstractView from '../framework/view/abstract-view.js';

export default class ItineraryPointListView extends AbstractView {
  get template() {
    return createItineraryPointListTemplate();
  }

}

function createItineraryPointListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

