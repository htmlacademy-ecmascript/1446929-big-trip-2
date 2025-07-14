import dayjs from 'dayjs';
import { DATE_FORMAT } from './const.js';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function humanizeEventDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

export { getRandomArrayElement, getRandomNumber, humanizeEventDate };
