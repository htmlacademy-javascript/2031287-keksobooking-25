function getRangeMM(min, max) {
  if (min >= 0) {
    if(max <= min) {
      max = min;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return 'ERROR: minimum value must be 0';
  }
}
getRangeMM(0,100);

function getRangeMMD(min,max,digits) {
  if (min >= 0) {
    if(max <= min) {
      max = min;
    }
    const number = (Math.random() * (max - min + 1)) + min;
    return number.toFixed(digits);
  } else {
    return 'ERROR: minimum value must be 0';
  }
}
