const POINT_COUNT = 3;

const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DateFormat = {
  HOUR_MINUTE: 'HH:mm',
  MONTH_DAY: 'MMM D',
  DAY_MONTH_YEAR_TIME: 'DD/MM/YY HH:mm',
  DURATION_DAY_HOUR_MINUTE: 'DD[D] HH[H] mm[M]',
  DURATION_TIME_HOUR_MINUTE: 'HH[H] mm[M]',
  DURATION_TIME_MINUTE: 'mm[M]',
};

const NoPointMessage = {
  EVERYTHING: 'Click New Event to create your first point',
  PAST: 'There are no past events now',
  PRESENT: 'There are no present events now',
  FUTURE: 'There are no future events now'
};

const FilterType = {
  EVERYTHING: 'everything',
  PAST: 'past',
  PRESENT: 'present',
  FUTURE: 'future'
};

const SortType = {
  DAY: 'day',
  PRICE: 'price',
  TIME: 'time',
};

export { POINT_COUNT, POINT_TYPES, DateFormat, NoPointMessage, FilterType, SortType };
