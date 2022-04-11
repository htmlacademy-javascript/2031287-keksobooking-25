import { getRandomPositiveInteger, getRandomPositiveFloat, randomArray, randomNumber, numberWithZero} from "./until";
import {getObject} from './data.js';


const place = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkTime = ['12:00', '13:00', '14:00'];

const roomFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];

const roomDescription = ['За супер цену', 'Хорошие отзывы', 'Последния возможность'];

const roomPhoto = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const ads = Array.from({length:10}, getObject);

console.log(ads);


