import {getObject} from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAds = getObject();
const similarFragment = document.createDocumentFragment();

similarAds.forEach( ({title, address, price, type, rooms, guests, checkin, checkout, features, descriptions, photos}) => {

  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.popup__title').textContent = title;
  newCard.querySelector('..popup__text--address').textContent = address;
  newCard.querySelector('.popup__text--price').textContent = price + " ₽/ночь.";
  newCard.querySelector('.popup__type')


})
