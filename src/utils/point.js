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
  const durationData = dayjs.duration(datesDifference);

  if (durationData.asHours() < 1) {
    return durationData.format(DateFormat.DURATION_TIME_MINUTE);
  }
  if (durationData.asDays() < 1) {
    return durationData.format(DateFormat.DURATION_TIME_HOUR_MINUTE);
  }
  return durationData.format(DateFormat.DURATION_DAY_HOUR_MINUTE);
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

function sortPointsByPrice(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

function sortPointsByTime(pointA, pointB) {
  const timeA = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const timeB = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));

  return timeB - timeA;
}

function sortPointsByDate(pointA, pointB) {
  const dateA = dayjs(pointA.dateFrom);
  const dateB = dayjs(pointB.dateFrom);

  return dateA - dateB;
}

export { humanizeEventDate, humanizeFormEventDate, humanizeEventTime, getTimeDifference, isPointDateInPast, isPointDateInFuture, isPointDateInPresent, sortPointsByPrice, sortPointsByTime, sortPointsByDate };
