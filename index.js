'use strict';

let booleanValue = false;

const booleanObj = new Boolean(false); //address
console.log(booleanObj);
// console.log(typeof booleanObj.toString(), booleanObj.toString());
// console.log(typeof booleanObj.valueOf(), booleanObj.valueOf());

if (booleanValue) {
  console.log('booleanValue = ', booleanValue);
}

if (booleanObj) {
  console.log('booleanObj value = ', booleanObj.valueOf());
}

const test = true.toString();

const test2 = new Boolean(true).toString();

const test3 = Boolean('');
console.log(test3);


const value1 = 5;
const value2 = true;
