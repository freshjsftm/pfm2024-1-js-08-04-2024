'use strict';

const arr1 = [1, 1, 1];

console.log(arr1);


const symbol1 = Symbol('description our symbol');
console.log(symbol1);

const symbol2 = Symbol('опис для чого потрібен символ');
console.log(symbol2);

const symbol3 = Symbol('опис для чого потрібен символ');
console.log(symbol3);

const object1 = {
  prop:12,
  45:45,
  [symbol1]:'value'
}
object1[symbol2] = 789;
let keyNumber = 45;
let strKey = 'prop'; //hucker 
delete object1[strKey];

delete object1[symbol1];
console.log(object1);
console.log(object1[keyNumber]);
console.log(object1[45]);
console.log(object1.prop);
console.log(object1['prop']);
console.log(object1[strKey]);
console.log(object1[symbol1]);
