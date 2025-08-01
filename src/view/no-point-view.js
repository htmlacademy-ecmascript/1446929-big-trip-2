import AbstractView from '../framework/view/abstract-view.js';

export default class NoPointView extends AbstractView {
  #message = null;

  constructor({ message }) {
    super();
    this.#message = message;
  }

  get template() {
    return createNoPointTemplate(this.#message);
  }
}

function createNoPointTemplate(message) {
  return (
    `<p class="trip-events__msg">
      ${message}
     </p>`
  );
}
