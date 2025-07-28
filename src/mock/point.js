import { getRandomArrayElement, getRandomNumber } from '../utils.js';

const BasePrice = {
  MIN: 50,
  MAX: 500
};

const mockPoints = [
  {
    id: '96da9ff3-a9d0-4d47-b833-a32ff7ed0bf8',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-16T18:58:16.332Z',
    dateTo: '2025-07-17T13:38:16.332Z',
    destination: '7bfa0046-1b4b-42d8-bb6b-4a18fcaade8b',
    isFavorite: false,
    offers: [],
    type: 'check-in'
  },
  {
    id: '98163486-c517-40e1-9504-5ed331d77963',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-17T21:33:16.332Z',
    dateTo: '2025-07-18T03:35:16.332Z',
    destination: '43b83855-406d-46cb-b1e9-e12be30b3364',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'bba45138-9070-4f94-ba2f-e7e814193694',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-19T20:54:16.332Z',
    dateTo: '2025-07-20T18:12:16.332Z',
    destination: '256295d4-e6ee-42b4-af3b-5bd148e630ed',
    isFavorite: false,
    offers: [
      'bb06d4b3-33d0-4d03-8903-7c1f962939c4'
    ],
    type: 'drive'
  },
  {
    id: 'a437cb5a-548f-42d1-91d8-159ebcce4641',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-21T02:14:16.332Z',
    dateTo: '2025-07-21T09:44:16.332Z',
    destination: '7bfa0046-1b4b-42d8-bb6b-4a18fcaade8b',
    isFavorite: false,
    offers: [
      '6084011f-96c8-4a31-8fb3-c16168ad1c2a',
      '49a31db7-ac87-4b0c-b369-a0ea191e0ab3',
      'f71d4419-87ea-49be-8ff9-a0968e0070be',
      '1aa22d26-100e-4cb2-9db1-3612b52b1fd0',
      'bc51dfb3-ba73-4b1f-a929-6a71bbd65d9f',
      'a91f2239-05a1-4a3c-b963-883ebbf674e0'
    ],
    type: 'ship'
  },
  {
    id: '66cf438d-d0b6-4895-b8a0-ee931c895248',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-22T15:11:16.332Z',
    dateTo: '2025-07-23T12:25:16.332Z',
    destination: '43b83855-406d-46cb-b1e9-e12be30b3364',
    isFavorite: false,
    offers: [],
    type: 'train'
  },
  {
    id: '580d346c-53fc-4383-ab92-a4b5bf204e7a',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-24T07:47:16.332Z',
    dateTo: '2025-07-24T14:13:16.332Z',
    destination: 'e0b94491-b4ca-496d-bb01-964a39976375',
    isFavorite: true,
    offers: [
      '15d1807b-cf43-49d6-99ae-26f6f5a3136c',
      '1aa758e2-4767-47ed-be05-9889440e6636',
      '4ba3c996-9893-4fbc-8b19-43139334d6b4',
      '090ef061-5890-449a-b377-f197578a5b58'
    ],
    type: 'taxi'
  },
  {
    id: 'ca77a6fb-6738-479b-ab20-641c19f54552',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-25T05:02:16.332Z',
    dateTo: '2025-07-26T01:08:16.332Z',
    destination: '43b83855-406d-46cb-b1e9-e12be30b3364',
    isFavorite: true,
    offers: [
      'a35732ef-073d-47a3-89d0-8f606bd01af5',
      '8e1090ba-0925-41e2-8fc8-66c1d4c969ec'
    ],
    type: 'check-in'
  },
  {
    id: '5565575a-1ed0-4e3d-97a3-dbdfdd3f3489',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-27T22:47:16.332Z',
    dateTo: '2025-07-29T15:31:16.332Z',
    destination: 'f969b816-d0d3-4d66-8434-6861c54df268',
    isFavorite: true,
    offers: [
      '6084011f-96c8-4a31-8fb3-c16168ad1c2a',
      '49a31db7-ac87-4b0c-b369-a0ea191e0ab3',
      'f71d4419-87ea-49be-8ff9-a0968e0070be',
      '1aa22d26-100e-4cb2-9db1-3612b52b1fd0',
      'bc51dfb3-ba73-4b1f-a929-6a71bbd65d9f',
      'a91f2239-05a1-4a3c-b963-883ebbf674e0'
    ],
    type: 'ship'
  },
  {
    id: 'de436e9a-8969-4e3d-b4df-961052e0cd36',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-07-31T09:12:16.332Z',
    dateTo: '2025-08-02T08:58:16.332Z',
    destination: 'a5f6d182-1ca7-4a3a-9585-8c06b8baf80f',
    isFavorite: false,
    offers: [
      'a1daf546-c9bc-4e89-89fb-3f6a2a02de44',
      '2394d380-fba4-400a-abc1-adbbfd98bea3'
    ],
    type: 'restaurant'
  },
  {
    id: 'b656c571-bb34-46f1-896c-5a94a70166ff',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-03T10:59:16.332Z',
    dateTo: '2025-08-05T05:52:16.332Z',
    destination: 'a5f6d182-1ca7-4a3a-9585-8c06b8baf80f',
    isFavorite: true,
    offers: [
      'e7e83414-1f13-4af5-84fb-3d7242cda475',
      '537a2e07-2a38-479b-8c9e-97489b060f60',
      'a0e29b52-58d9-4bc9-8f5e-2ed117ce4bf1',
      'b2b635f9-169c-431a-a56a-5d7c0d03e8ee',
      'af879093-7929-4e86-b8ef-31fc47d39c73'
    ],
    type: 'flight'
  },
  {
    id: 'c0d33d5a-32b9-4324-ae69-1560e0858d82',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-05T17:12:16.332Z',
    dateTo: '2025-08-06T19:14:16.332Z',
    destination: 'd73057e8-d1b9-41b3-bced-5393c3820c9a',
    isFavorite: false,
    offers: [],
    type: 'bus'
  },
  {
    id: 'c8c7ce26-5d9c-4494-9ead-2e2d0eab0f89',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-07T17:54:16.332Z',
    dateTo: '2025-08-08T23:03:16.332Z',
    destination: '43b83855-406d-46cb-b1e9-e12be30b3364',
    isFavorite: false,
    offers: [],
    type: 'check-in'
  },
  {
    id: '759b34cf-1f45-414d-bb63-fc79b0a06b92',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-10T08:22:16.332Z',
    dateTo: '2025-08-11T11:03:16.332Z',
    destination: 'f969b816-d0d3-4d66-8434-6861c54df268',
    isFavorite: true,
    offers: [
      '7f41eea3-44b9-4e40-a91b-f0e687712abd',
      'bb06d4b3-33d0-4d03-8903-7c1f962939c4'
    ],
    type: 'drive'
  },
  {
    id: 'f3f9955f-a4c2-4a1f-8165-4cf97a4c53cd',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-12T23:33:16.332Z',
    dateTo: '2025-08-14T05:10:16.332Z',
    destination: 'd0263d05-3e0a-4965-ae58-161063667bb4',
    isFavorite: false,
    offers: [
      '77f03f07-5bf4-467c-8a1f-bb688ce6fd5d',
      '04c34323-905b-4e56-a41b-0374b25fa6e1'
    ],
    type: 'bus'
  },
  {
    id: 'd17cdb47-92d9-4787-a680-ddf1c3e0c12d',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-14T19:47:16.332Z',
    dateTo: '2025-08-16T04:41:16.332Z',
    destination: 'f969b816-d0d3-4d66-8434-6861c54df268',
    isFavorite: true,
    offers: [
      '44d65172-c952-4b49-b8ff-84bc5601d895',
      '4cffc69c-55ef-4a83-906e-4518fe2821bd',
      'ce6dfeac-461f-492c-9656-107d41e748e7'
    ],
    type: 'train'
  },
  {
    id: '0e89d2ce-d0a6-40f2-bf19-4cd842653a67',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-17T14:51:16.332Z',
    dateTo: '2025-08-19T07:18:16.332Z',
    destination: 'a5f6d182-1ca7-4a3a-9585-8c06b8baf80f',
    isFavorite: false,
    offers: [
      'a35732ef-073d-47a3-89d0-8f606bd01af5',
      '8e1090ba-0925-41e2-8fc8-66c1d4c969ec'
    ],
    type: 'check-in'
  },
  {
    id: '226c1ff8-ba44-44e0-bdd5-787ec4b1a3b2',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-21T04:01:16.332Z',
    dateTo: '2025-08-23T03:05:16.332Z',
    destination: 'e0b94491-b4ca-496d-bb01-964a39976375',
    isFavorite: false,
    offers: [
      '2394d380-fba4-400a-abc1-adbbfd98bea3'
    ],
    type: 'restaurant'
  },
  {
    id: 'e613c651-d7ed-4ad4-a6b0-a93a06d3773b',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-23T20:19:16.332Z',
    dateTo: '2025-08-25T19:36:16.332Z',
    destination: 'a5f6d182-1ca7-4a3a-9585-8c06b8baf80f',
    isFavorite: false,
    offers: [
      'b2b635f9-169c-431a-a56a-5d7c0d03e8ee',
      'af879093-7929-4e86-b8ef-31fc47d39c73'
    ],
    type: 'flight'
  },
  {
    id: '959d1ede-f1ba-4dbb-a8fa-a2b48c9baa10',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-27T17:12:16.332Z',
    dateTo: '2025-08-29T14:29:16.332Z',
    destination: 'd0263d05-3e0a-4965-ae58-161063667bb4',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'b6ec2d0b-df47-43bb-b940-39623b414288',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-08-30T18:44:16.332Z',
    dateTo: '2025-08-31T10:50:16.332Z',
    destination: 'f969b816-d0d3-4d66-8434-6861c54df268',
    isFavorite: true,
    offers: [
      'e7e83414-1f13-4af5-84fb-3d7242cda475',
      '537a2e07-2a38-479b-8c9e-97489b060f60',
      'a0e29b52-58d9-4bc9-8f5e-2ed117ce4bf1',
      'b2b635f9-169c-431a-a56a-5d7c0d03e8ee',
      'af879093-7929-4e86-b8ef-31fc47d39c73'
    ],
    type: 'flight'
  },
  {
    id: '62b70223-5308-45ce-8c42-9a6e20a046bd',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-09-01T18:32:16.332Z',
    dateTo: '2025-09-03T02:23:16.332Z',
    destination: 'a5f6d182-1ca7-4a3a-9585-8c06b8baf80f',
    isFavorite: true,
    offers: [
      'a1daf546-c9bc-4e89-89fb-3f6a2a02de44',
      '2394d380-fba4-400a-abc1-adbbfd98bea3'
    ],
    type: 'restaurant'
  },
  {
    id: '94e6fa10-930f-4cd9-9144-c3136f016cbe',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-09-04T13:34:16.332Z',
    dateTo: '2025-09-06T13:41:16.332Z',
    destination: 'f969b816-d0d3-4d66-8434-6861c54df268',
    isFavorite: false,
    offers: [
      'a35732ef-073d-47a3-89d0-8f606bd01af5',
      '8e1090ba-0925-41e2-8fc8-66c1d4c969ec'
    ],
    type: 'check-in'
  },
  {
    id: '6cef0b9b-ee2f-4803-bbb9-62f7b0e9447c',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-09-07T22:04:16.332Z',
    dateTo: '2025-09-09T11:24:16.332Z',
    destination: 'd0263d05-3e0a-4965-ae58-161063667bb4',
    isFavorite: false,
    offers: [
      'b0fbdd96-071a-4e58-b6d8-fa0f7e8becc7',
      'bd25e8e6-5826-415a-9586-a8fcdb9b669c',
      '0593fab7-a902-4db0-b8fd-7b2233e44dc6',
      'a35732ef-073d-47a3-89d0-8f606bd01af5',
      '8e1090ba-0925-41e2-8fc8-66c1d4c969ec'
    ],
    type: 'check-in'
  },
  {
    id: '4a76b8f2-6652-411f-bd28-b85ae2cfb04a',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-09-10T14:38:16.332Z',
    dateTo: '2025-09-12T07:56:16.332Z',
    destination: 'f969b816-d0d3-4d66-8434-6861c54df268',
    isFavorite: false,
    offers: [
      '0593fab7-a902-4db0-b8fd-7b2233e44dc6',
      'a35732ef-073d-47a3-89d0-8f606bd01af5',
      '8e1090ba-0925-41e2-8fc8-66c1d4c969ec'
    ],
    type: 'check-in'
  },
  {
    id: 'f53a232b-1def-45c4-a173-1a5d41511301',
    basePrice: getRandomNumber(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2025-09-12T14:45:16.332Z',
    dateTo: '2025-09-14T13:47:16.332Z',
    destination: '43b83855-406d-46cb-b1e9-e12be30b3364',
    isFavorite: false,
    offers: [
      'ce6dfeac-461f-492c-9656-107d41e748e7'
    ],
    type: 'train'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export { getRandomPoint };
