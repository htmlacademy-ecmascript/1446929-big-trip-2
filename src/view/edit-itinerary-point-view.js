import AbstractView from '../framework/view/abstract-view.js';
import { humanizeFormEventDate } from '../utils/point.js';
import { POINT_TYPES } from '../const.js';

export default class EditItineraryPointView extends AbstractView {
  #point = null;
  #offers = null;
  #destinations = null;
  #handleEditFormClick = null;
  #handleEditFormSubmit = null;

  constructor({ point, destinations, offers, onEditFormClick, onEditFormSubmit }) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleEditFormClick = onEditFormClick;
    this.#handleEditFormSubmit = onEditFormSubmit;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editFormClickHandler);

    this.element.addEventListener('submit', this.#editFormSubmitHandler);
  }

  get template() {
    return createEditItineraryPointTemplate(this.#point, this.#destinations, this.#offers);
  }

  #editFormClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditFormSubmit(this.#point);
  };

  #editFormSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditFormSubmit(this.#point);
  };

}


function createEditItineraryPointTemplate(point, destinations, offers) {
  const { type, dateFrom, dateTo, basePrice, id } = point;
  const destinationOptions = destinations.map((destinationOption) => destinationOption.name);
  const pointDestination = destinations.find((destination) => destination.id === point.destination);
  const typeOffers = offers.find((offer) => offer.type === point.type).offers;
  const pointOffers = typeOffers.filter((typeOffer) => point.offers.includes(typeOffer.id));
  const { name, description, pictures } = pointDestination || {};

  const startDate = humanizeFormEventDate(dateFrom);
  const endDate = humanizeFormEventDate(dateTo);

  return (
    `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${POINT_TYPES.map((pointType) => (`<div class="event__type-item">
              <input id="event-type-${pointType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType}">
              <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-1">${pointType.charAt(0).toUpperCase() + pointType.slice(1)}</label>
            </div>`)).join('')}
          </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${id}">
            ${type}
          </label>

          <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${name}" list="destination-list-${id}">
          <datalist id="destination-list-${id}">
            ${destinationOptions.map((option) => (`<option value="${option}"></option>`)).join('')}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
      ${typeOffers.length ?
      `<section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
      ${typeOffers.map((typeOffer) => (`<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${typeOffer.title}-${id}" type="checkbox" name="event-offer-${typeOffer.title}" ${pointOffers.map((offer) => offer.id).includes(typeOffer.id) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${typeOffer.title}-${id}">
          <span class="event__offer-title">${typeOffer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${typeOffer.price}</span>
        </label>
        </div>`)).join('')}
          </div>
        </section>`
      : ''}

        ${pointDestination ? (
      `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>
          ${pictures.length ? (
        `<div class="event__photos-container">
                <div class="event__photos-tape">
                  ${pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`).join('')}
                </div>
            </div>`
      ) : ''}
        </section>`
    ) : ''}

      </section>
    </form>`
  );
}

