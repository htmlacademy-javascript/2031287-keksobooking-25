import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  randomArray,
  numberWithZero
} from './utils.js';

const place = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkTime = ['12:00', '13:00', '14:00'];

const roomFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];

const roomDescription = ['За супер цену', 'Хорошие отзывы', 'Последния возможность'];

const roomPhoto = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getObject = () => ({
  avatar: `img/avatars/user${  numberWithZero()  }.png`,
  title: 'Аренда',
  address: {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  },
  price: getRandomPositiveInteger(1000,10000),
  type: randomArray(place),
  rooms: getRandomPositiveInteger(1,10),
  guests: getRandomPositiveInteger(1,6),
  checkin: randomArray(checkTime),
  checkout: randomArray(checkTime),
  features: randomArray(roomFeatures),
  description: randomArray(roomDescription),
  photos: randomArray(roomPhoto),
});

const ads = Array.from({length: 4}, getObject);

export {ads};
