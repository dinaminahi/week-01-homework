//https://www.codewars.com/kata/maximum-multiple/train/javascript

function maxMultiple(divisor, bound){
   const divisibleInt = [];
   for (let i = 0; i <= bound; i++) {
      if (i % divisor === 0) {
         divisibleInt.push(i);
      }
   }
   return divisibleInt[divisibleInt - 1];
}


//https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

function hero(bullets, dragons){
   return bullets / dragons >= 2 ? true : false;
}
