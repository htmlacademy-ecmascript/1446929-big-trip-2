const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export { isEscapeKey, getRandomArrayElement, getRandomNumber, updateItem };
