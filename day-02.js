//https://www.codewars.com/kata/571edd157e8954bab500032d

const  v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;
function equal1(){
  const a = v1;   
  const b = v1;
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  const a = v4;  //set number value to a
  const b = v2; //set number value to b
  return a - b;
}
function equal3(){
  const a = v1;  //set number value to a
  const b = v5;  //set number value to b
  return a * b;
}
function equal4(){
  const a = v4;  //set number value to a
  const b = v5;  //set number value to b
  return a / b;
}
function equal5(){
  const a = v6;  //set number value to a
  const b = v3;  //set number value to b
  return a % b;
}


//https://www.codewars.com/kata/571f1eb77e8954a812000837

function animal(obj){
  return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.';
}



//https://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr){
  const el = 1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}




//https://www.codewars.com/kata/571edea4b625edcb51000d8e

const a1 = 'A', a2 = 'a', b1 = 'B', b2 = 'b', c1 = 'C', c2 = 'c', d1 = 'D', d2 = 'd', e1 = 'E', e2 = 'e', n1 = 'N', n2 = 'n';
function Dad(){
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return 'no';
}
function answer2(){
  //the answer should be "yes" or "no"
  return 'no';
}
function answer3(){
  //the answer should be "yes" or "no"
  return 'yes';
}
