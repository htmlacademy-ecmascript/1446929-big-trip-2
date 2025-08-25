import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { humanizeFormEventDate } from '../utils/point.js';
import { POINT_TYPES } from '../const.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default class EditPointView extends AbstractStatefulView {

  #destinations = null;
  #offers = null;
  #handleCloseEditFormClick = null;
  #handleEditFormSubmit = null;
  #datepickerFrom = null;
  #datepickerTo = null;

  constructor({ point, destinations, offers, onCloseEditFormClick, onEditFormSubmit }) {
    super();
    this.#destinations = destinations;
    this.#offers = offers;

    this.#handleCloseEditFormClick = onCloseEditFormClick;
    this.#handleEditFormSubmit = onEditFormSubmit;

    this._setState(EditPointView.parsePointToState({ point, offers, destinations }));
    this._restoreHandlers();

  }

  get template() {
    return createEditPointTemplate({
      destinations: this.#destinations,
      offers: this.#offers,
      state: this._state
    });
  }

  reset = (point) => this.updateElement({ point });

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeEditFormClickHandler);
    this.element.addEventListener('submit', this.#editFormSubmitHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#pointTypeChangeHandler);
    this.element.querySelectorAll('.event__offer-checkbox').forEach((offer) => offer.addEventListener('input', this.#offersChangeHandler));
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('change', this.#basePriceChangeHandler);

    this.#setDatepickers();
  }

  #closeEditFormClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseEditFormClick();
  };

  #editFormSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditFormSubmit(EditPointView.parseStateToPoint(this._state));
  };

  #pointTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      point: {
        ...this._state.point,
        type: evt.target.value,
        offers: []
      }
    });
  };

  #offersChangeHandler = (evt) => {
    evt.preventDefault();
    const selectedOfferIdElements = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked')).map((checkboxElement) => checkboxElement.value);
    const offersByType = this.#offers.find((offer) => offer.type === this._state.type)?.offers || [];
    const selectedOffers = offersByType.filter((offer) => selectedOfferIdElements.includes(offer.id));
    this._setState({ offers: selectedOffers });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const selectedDestination = this.#destinations.find((destination) => destination.name === evt.target.value);
    const selectedDestinationId = (selectedDestination) ? selectedDestination.id : null;
    this.updateElement({ point: { ...this._state.point, destination: selectedDestinationId } });
  };

  #basePriceChangeHandler = (evt) => {
    evt.preventDefault();

    this._setState({
      point: {
        ...this._state.point,
        basePrice: parseInt(evt.target.value, 10)
      }
    });
  };

  #dateFromCloseHandler = ([userDate]) => {
    this._setState({
      point: {
        ...this._state.point,
        dateFrom: userDate
      }
    });
    this.#datepickerTo.set('minDate', this._state.point.dateFrom);
  };

  #dateToCloseHandler = ([userDate]) => {
    this._setState({
      point: {
        ...this._state.point,
        dateTo: userDate
      }
    });
    this.#datepickerFrom.set('maxDate', this._state.point.dateTo);
  };

  #setDatepickers = () => {
    const [dateFrom, dateTo] = this.element.querySelectorAll('.event__input--time');
    const config = {
      dateFormat: 'd/m/y H:i',
      enableTime: true,
      locale: { firstDayOfWeek: 1 },
      'time_24hr': true
    };

    this.#datepickerFrom = flatpickr(
      dateFrom,
      {
        ...config,
        defaultDate: this._state.point.dateFrom,
        onClose: this.#dateFromCloseHandler,
        maxDate: this._state.point.dateTo
      }
    );

    this.#datepickerTo = flatpickr(
      dateTo,
      {
        ...config,
        defaultDate: this._state.point.dateTo,
        onClose: this.#dateToCloseHandler,
        minDate: this._state.point.dateFrom
      }
    );
  };

  static parsePointToState(point) {
    return { ...point };
  }

  static parseStateToPoint(state) {
    return state.point;
  }

}

function createDestinationOptionsTemplate(options) {
  if (!options) {
    return;
  }

  return `
    <datalist id="destination-list-1">
      ${options.map((option) => `<option value="${option}">${option}</option>`).join('')}
    </datalist>`;
}


function createEditPointTemplate({ state, destinations, offers }) {
  const { point: { type, dateFrom, dateTo, basePrice, id } } = state;
  const destinationOptions = destinations.map((destinationOption) => destinationOption.name);
  const pointDestination = destinations.find((destination) => destination.id === state.point.destination);
  const allOffersByType = offers.find((offer) => offer.type === state.point.type).offers;
  const pointOffers = allOffersByType.filter((typeOffer) => state.point.offers.includes(typeOffer.id));
  const { name, description, pictures } = pointDestination || {};

  const destinationOptionsTemplate = createDestinationOptionsTemplate(destinationOptions);

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
              <input
                id="event-type-${pointType}-${id}"
                class="event__type-input  visually-hidden"
                type="radio"
                name="event-type"
                value="${pointType}"
                ${pointType === type ? 'checked' : ''}
              >
              <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-${id}">${pointType.charAt(0).toUpperCase() + pointType.slice(1)}</label>
            </div>`)).join('')
    }
          </fieldset >
          </div >
        </div >

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${id}">
            ${type}
          </label>

          <input
            class="event__input  event__input--destination"
            id="event-destination-${id}"
            type="text"
            name="event-destination"
            value="${name}"
            list="destination-list-1"
          >
          ${destinationOptionsTemplate}
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input
            class="event__input  event__input--time"
            id="event-start-time-1"
            type="text"
            name="event-start-time"
            value="${startDate}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input
            class="event__input  event__input--time"
            id="event-end-time-1"
            type="text"
            name="event-end-time"
            value="${endDate}">
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
      ${allOffersByType.length ?
      `<section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${allOffersByType.map((typeOffer) => (`
        <div class="event__offer-selector">
          <input
            class="event__offer-checkbox  visually-hidden"
            id="event-offer-${typeOffer.title}-${id}"
            type="checkbox"
            name="event-offer-${typeOffer.title}"
            ${pointOffers.map((offer) => offer.id).includes(typeOffer.id) ? 'checked' : ''}

          >
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


