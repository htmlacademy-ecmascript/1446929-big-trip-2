import { createElement } from '../render.js';

function createItineraryPointListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ItineraryPointListView {
  getTemplate() {
    return createItineraryPointListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
