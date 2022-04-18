const formSlider = () => {
  const sliderElement = document.querySelector('.level-form__slider');
  const valueElement = document.querySelector('.level-form__value');

  const slider = noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 80,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
  });
  console.log(slider);
};

export {formSlider};
