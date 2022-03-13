function getRandomPositiveInteger (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {

  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}


const randomArray = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

const randomNumber = getRandomPositiveInteger(0,10);

const numberWithZero = () =>  {
  if (randomNumber < 10) {
    return `${0  }${  randomNumber}`;
  }
  else {
    return randomNumber;
  }

};

const place = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkTime = ['12:00', '13:00', '14:00'];

const roomFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];

const roomDescription = ['За супер цену', 'Хорошие отзывы', 'Последния возможность'];

const roomPhoto = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getObject = () => ({
  avatar: `img/avatars/user${  numberWithZero()  }.png`,
  title: 'Аренда',
  address: `${getRandomPositiveFloat(3565000,3570000,2)  }, ${
    getRandomPositiveFloat(13970000,13980000,3)}`,
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

const ads = Array.from({length:10}, getObject);


console.log(ads);

// Решил сделать другой вариант с добавлением.
