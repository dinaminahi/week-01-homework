//https://www.codewars.com/kata/training-js-number-6-basic-data-types-boolean-and-conditional-statements-if-dot-else/train/javascript

function trueOrFalse(val){
  if (val) {
    return 'true'; 
  } else {
    return 'false';
  }
}

//https://www.codewars.com/kata/training-js-number-7-if-dot-else-and-ternary-operator/train/javascript


function saleHotdogs(n){
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}
  
//https://www.codewars.com/kata/training-js-number-8-conditional-statement-switch/train/javascript
  function howManydays(month){
  let days;
  switch (month){
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
  } 
  return days;
}
