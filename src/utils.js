import dayjs from 'dayjs';
import { DateFormat } from './const.js';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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

export { getRandomArrayElement, getRandomNumber, humanizeEventDate, humanizeFormEventDate, humanizeEventTime, getTimeDifference };
