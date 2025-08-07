import { FilterType } from '../const.js';
import { isPointDateInPast, isPointDateInFuture, isPointDateInPresent } from './point.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointDateInFuture(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPointDateInPresent(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => isPointDateInPast(point.dateTo)),
};

export { filter };
