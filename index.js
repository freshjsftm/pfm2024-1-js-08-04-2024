'use strict';
import object1 from './js/symbol.js';

const arr1 = [1, 1, 1];
console.log(arr1);

let keyNumber = 45;
let strKey = 'prop'; //hucker
// delete object1[strKey];

// delete object1[symbol1];
console.log(object1);
console.log(object1[keyNumber]);
console.log(object1[45]);
console.log(object1.prop);
console.log(object1['prop']);
console.log(object1[strKey]);
// console.log(object1[symbol1]);

for (const key in object1) {
  const element = object1[key];
  console.log(key, element);
}
