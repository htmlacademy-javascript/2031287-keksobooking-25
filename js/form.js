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

const setSettingsFormPriceInput = (minPrice) => {
  const priceInput = document.querySelector('#price');

  priceInput.setAttribute('placeholder', minPrice.toLocaleString('ru'));
  priceInput.min = minPrice;
  priceInput.value = minPrice;
};

const onPriceChange = (evt) => {
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
    case 'house ' :
      setSettingsFormPriceInput(5000);
      break;
    case 'palace' :
      setSettingsFormPriceInput(10000);
      break;
  }
};

const typePlace = document.querySelector('#type');

const photoFileInput = document.querySelector('#images');

photoFileInput.addEventListener('change', readURL)

function readURL(input) {
  if (input.target.files && input.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgPreview = document.querySelector('#preview');
      imgPreview.setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(input.target.files[0]);
  }
}

typePlace.addEventListener('change', onPriceChange);


// module: user-modal.js >
/*const resetForm = document.querySelector('.ad-form__reset');
const formInput = form.querySelector('input');

resetForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  formInput.textContent = '';
}); */

export {formValidate};
