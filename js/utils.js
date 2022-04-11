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

const randomArray = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const numberWithZero = () =>  {
  const randomNumber = getRandomPositiveInteger(0, 10);

  if (randomNumber < 10) {
    return `${0}${  randomNumber}`;
  } else {
    return randomNumber;
  }
};

const getCardTitle = (type) => {
  switch(type) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
    case 'hotel':
      return 'Отель';
    default:
      return 'Не понятное значение!';
  }
};

export {getCardTitle};
export {getRandomPositiveInteger};
export {getRandomPositiveFloat};
export {randomArray};
export {numberWithZero};
