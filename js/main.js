import {getActivated, getDisabled} from './utils.js';
import {formValidate} from './form.js';
import {formSlider} from './noUiSlider.js';
import {addMap, addMainPin, makeMarkers} from './map.js';
import {ads} from './data.js';

getDisabled();
formValidate();
formSlider();
getActivated();

addMap();
addMainPin();
makeMarkers(ads);
