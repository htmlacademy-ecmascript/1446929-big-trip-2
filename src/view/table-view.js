import { createElement } from '../render.js';

function createTableTemplate() {
  return '<section class="trip-events"></section>';
}

export default class TableView {
  getTemplate() {
    return createTableTemplate();
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

