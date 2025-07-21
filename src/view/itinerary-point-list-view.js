import { createElement } from '../render.js';

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

function createItineraryPointListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

