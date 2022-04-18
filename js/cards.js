import { getCardTitle } from './utils.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

/**
 * Функция, которая скрывает пустые элементы
 */
const cardElem = (template, element, data, text) => {
  // Если есть данные, то прокидываем их в наш элемент
  if (data) {
    template.querySelector(element).textContent = text;
  } else {
    // Если данных нет, то скрываем элемент
    template.querySelector(element).classList.add('hidden');
  }
};

/**
 * Функция рендера popup
 * @param card - объект с данными, которые нужно отобразить в попапе
 */
const renderCards = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  if (card.avatar) {
    cardElement.querySelector('.popup__avatar').src = `${card.avatar}`;
  } else {
    cardElement.querySelector('.popup__avatar').classList.add('hidden');
  }

  // пробрасываем данные
  cardElem(cardElement, '.popup__title', card.title, `${card.title}`);
  cardElem(cardElement, '.popup__text--address', card.address, `${card.address.lat} ${card.address.lng}`);
  cardElem(cardElement, '.popup__text--price', card.price, `${card.price} ₽/ночь`);
  cardElem(cardElement, '.popup__type', card.type, getCardTitle(card.type));
  cardElem(cardElement, '.popup__text--capacity', card.rooms && card.guests, `${card.rooms} комнаты ${card.guests} гостей`);
  cardElem(cardElement, '.popup__text--time', card.checkin && card.checkout, `Заезд после ${card.checkin}, выезд до ${card.checkout}`);
  cardElem(cardElement, '.popup__features', card.features, `${card.features}`);
  cardElem(cardElement, '.popup__description', card.description, `${card.description}`);

  if (card.photos) {
    const cardPhotos = cardElement.querySelector('.popup__photos');
    cardPhotos.innerHTML = '';
    const picture = document.createElement('img');
    picture.src = card.photos;
    picture.alt = 'Фото жилья';
    picture.width = '45';
    picture.height = '40';
    picture.classList.add('popup__photo');
    cardPhotos.append(picture);
  } else {
    cardElement.querySelector('.popup__photo').classList.add('hidden');
  }

  return cardElement;
};

export {renderCards};
