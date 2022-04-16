import {updatePopup} from './cards.js';
import {getActivated, getDisabled} from './utils.js';
import {formValidate} from './form.js';
import {formSlider} from './noUiSlider.js';
import {siteMap} from './map.js';

updatePopup();
getDisabled();
formValidate();
formSlider();
siteMap();
getActivated();
