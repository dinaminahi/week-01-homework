//https://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str,n){
  while (n > 0){
    n % 2 === 0 ? str = str + '*' :  str = '*' + str;
    n--;
  }
  return str;
}

//https://www.codewars.com/kata/training-js-number-10-loop-statement-for/train/javascript

function pickIt(arr){
  let odd = [], even = [];
  for (let i = 0; i < arr.length; i++){
     if (arr[i] % 2 === 0) {
        even.push(arr[i]);
     } else {
        odd.push(arr[i]);
     }
  }
  return [odd,even];
}

//https://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls){
  let bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length < 3) {
       if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
         bag.push(dolls[i]);
       } else {
         continue;
       }
    } else {
       break;
    }
  }
  return bag;
}


//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
  let arr = [];
  for (let key in obj) {
     if (key.length === 5) {
       arr.push(key);
     }
     if (obj[key].length === 5) {
         arr.push(obj[key]);
     }
  }
  return arr;
}
