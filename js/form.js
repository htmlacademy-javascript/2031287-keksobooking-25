const formValidate = () => {
  const adForm = document.querySelector('.ad-form');

  const pristine = new Pristine(adForm, {
    classTo: 'ad-form__label',
    errorTextParent: 'ad-form__label',
    errorTextClass: 'ad-form__error-text',
  });

  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });

};
// почему эту функцию не нужно экспортить в main ?
const setSettingsFormPriceInput = (minPrice) => {
  const priceInput = document.querySelector('#price');
  //toLocaleString если я правильно понял его работу.... он тут не обяхателен?
  priceInput.setAttribute('placeholder', minPrice.toLocaleString('ru'));
  priceInput.min = minPrice;
  priceInput.value = minPrice;
};
// почему эту функцию не нужно экспортить в main ?
const onPriceChange = (evt) => {
  // что делает evt.target.value ?
  switch (evt.target.value) {
    case 'bungalow' :
      setSettingsFormPriceInput(0);
      break;
    case 'flat' :
      setSettingsFormPriceInput(1000);
      break;
    case 'hotel' :
      setSettingsFormPriceInput(3000);
      break;
    case 'house' :
      setSettingsFormPriceInput(5000);
      break;
    case 'palace' :
      setSettingsFormPriceInput(10000);
      break;
  }
};

const typePlace = document.querySelector('#type');

const photoFileInput = document.querySelector('#images');

photoFileInput.addEventListener('change', readURL);
// не понимаю работу .target.files

// нужно сделать: 3.7. Значением полей «Ваша фотография» и «Фотография жилья» может быть только изображение. Как?

function readURL(input) {
  if (input.target.files && input.target.files[0]) {
    const reader = new FileReader();
// не понимаю: reader.onload = function ?
    reader.onload = function (e) {
      const imgPreview = document.querySelector('#preview');
      // -//-
      imgPreview.setAttribute('src', e.target.result);
    };
    // -//-
    reader.readAsDataURL(input.target.files[0]);
  }
}

typePlace.addEventListener('change', onPriceChange);

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


// можно этот код улучшить чтобы 2 раза не писать? т.е. чтобы был один timeChange
const timeChangeIn = (evt) => {
  switch (evt.target.value) {
    case '12:00' :
      timeOut.value = '12:00';
      break;
    case '13:00' :
      timeOut.value = '13:00';
      break;
    case '14:00' :
      timeOut.value = '14:00';
      break;
  }
};

const timeChangeOut = (evt) => {
  switch (evt.target.value) {
    case '12:00' :
      timeIn.value = '12:00';
      break;
    case '13:00' :
      timeIn.value = '13:00';
      break;
    case '14:00' :
      timeIn.value = '14:00';
      break;
  }
};

timeIn.addEventListener('change', timeChangeIn);
timeOut.addEventListener('change', timeChangeOut);

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const capacityValidate = (evt) => {
  switch (evt.target.value) {
    case '1' :
      capacity.value = '1';
      break;
    case '2' :
      capacity.value = '2';
      break;
    case '3' :
      capacity.value = '3';
      break;
    case '100' :
      capacity.value = '0';
      break;
  }
};

const roomNumberValidate = (evt) => {
  switch (evt.target.value) {
    case '1' :
      roomNumber.value = '1';
      break;
    case '2' :
      roomNumber.value = '2';
      break;
    case '3' :
      roomNumber.value = '3';
      break;
    case '0' :
      roomNumber.value = '100';
      break;
  }
};

roomNumber.addEventListener('change', capacityValidate);
capacity.addEventListener('change', roomNumberValidate);

// почему не работыет мой ресет когда...:
/*const resetForm = document.querySelector('.ad-form__reset');
const formInput = form.querySelector('input');

resetForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  formInput.textContent = '';
}); */

export {formValidate};
