import { mockDestinations } from '../mock/destination.js';

export default class DestinationsModel {
  destinations = mockDestinations;

  getDestinations() {
    return this.destinations;
  }

}
