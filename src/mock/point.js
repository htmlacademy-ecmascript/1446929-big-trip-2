import { getRandomArrayElement, getRandomNumber } from '../utils.js';

const BasePrice = {
  MIN: 50,
  MAX: 500
};

const mockPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-18T22:55:56.845Z',
    dateTo: '2025-08-19T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'c4k3e4e6-9053-42ce-b747-e281314bcd31'
    ],
    type: 'taxi'
  },
  {
    id: 'g4b62099-293f-4c3d-a702-94eec4a2808d',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-19T21:55:56.845Z',
    dateTo: '2025-08-19T22:22:13.375Z',
    destination: 'dfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: false,
    offers: [
      'c5c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'bus'
  },
  {
    id: 'h4b62099-293f-4c3d-a702-94eec4a2808f',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-20T20:55:56.845Z',
    dateTo: '2025-08-21T10:22:13.375Z',
    destination: 'efe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offers: [
      'd4d3e4e6-9053-42ce-b747-e281314baa31',
      'd4f3e4e6-9053-42ce-b747-e281314baa20'
    ],
    type: 'flight'
  },
  {
    id: 'i4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-21T11:55:56.845Z',
    dateTo: '2025-08-21T18:22:13.375Z',
    destination: 'ffe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: false,
    offers: [
      'i6h3e4e6-9053-42ce-b747-e281314baa31',
      'i7c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'sightseeing'
  },
  {
    id: 'j4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-21T18:55:56.845Z',
    dateTo: '2025-08-21T20:30:13.375Z',
    destination: 'gfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offers: [],
    type: 'restaurant'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export { getRandomPoint };
