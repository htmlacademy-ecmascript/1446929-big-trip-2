import { mockOffers } from '../mock/offer.js';

export default class OffersModel {
  #offers = mockOffers;

  get offers() {
    return this.#offers;
  }

}
