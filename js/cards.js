import {getCardTitle} from './utils.js';
import {getObject} from './data.js';

const ads = Array.from({length:1}, getObject);

const updatePopup = () => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const similarAds = ads;
  const similarFragment = document.createDocumentFragment();
  const mapCanvas = document.querySelector('#map-canvas');

  similarAds.forEach( ({title, address, price, type, rooms, guests, checkin, checkout, features, descriptions, photos, avatar}) => {

    const newCard = cardTemplate.cloneNode(true);

    newCard.querySelector('.popup__title').textContent = title;
    newCard.querySelector('.popup__text--address').textContent = address;
    newCard.querySelector('.popup__text--price').textContent = `${price} ₽/ночь.`;
    newCard.querySelector('.popup__type').textContent = getCardTitle(type);
    newCard.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей.`;
    newCard.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
    newCard.querySelector('.popup__features').textContent = features;
    newCard.querySelector('.popup__description').textContent = descriptions;
    newCard.querySelector('.popup__photo').src = photos;
    newCard.querySelector('.popup__avatar').src = avatar;
    similarFragment.append(newCard);
  });

  mapCanvas.append(similarFragment);
};

export {updatePopup};
