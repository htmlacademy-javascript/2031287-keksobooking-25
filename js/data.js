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

export {getObject};
