import dayjs from 'dayjs';
import { DateFormat } from '../const.js';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

function humanizeEventDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DateFormat.MONTH_DAY) : '';
}

function humanizeFormEventDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DateFormat.DAY_MONTH_YEAR_TIME) : '';
}

function humanizeEventTime(dueTime) {
  return dueTime ? dayjs(dueTime).format(DateFormat.HOUR_MINUTE) : '';
}

const getTimeDifference = (dateFrom, dateTo) => {
  const startDate = dayjs(dateFrom);
  const endDate = dayjs(dateTo);
  const datesDifference = endDate.diff(startDate);
  const durationObject = dayjs.duration(datesDifference);

  if (durationObject.asHours() < 1) {
    return durationObject.format(DateFormat.DURATION_TIME_MINUTE);
  }
  if (durationObject.asDays() < 1) {
    return durationObject.format(DateFormat.DURATION_TIME_HOUR_MINUTE);
  }
  return durationObject.format(DateFormat.DURATION_DAY_HOUR_MINUTE);
};

function isPointDateInPast(date) {
  return dayjs().isAfter(date, 'D');
}

function isPointDateInFuture(date) {
  return dayjs().isBefore(date, 'D');
}

function isPointDateInPresent(date) {
  return dayjs().isSame(dayjs(date));
}

export { humanizeEventDate, humanizeFormEventDate, humanizeEventTime, getTimeDifference, isPointDateInPast, isPointDateInFuture, isPointDateInPresent };
