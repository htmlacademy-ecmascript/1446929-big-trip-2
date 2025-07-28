import { mockOffers } from '../mock/offer.js';

export default class OffersModel {
  #offers = mockOffers;

  getOffers() {
    return this.#offers;
  }
}
