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

export {getRandomPositiveInteger};
export {getRandomPositiveFloat};
export {randomArray};
export {randomNumber};
export {numberWithZero};


console.log('until.js');
