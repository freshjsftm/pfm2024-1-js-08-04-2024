'use strict';

const objNumber = new Number(12);
console.log(objNumber);
console.log(objNumber.valueOf());

const number1 = 12.345;// 1,2345*10^4
console.log(number1.toExponential());
console.log(number1.toFixed(2));


const bigInt = 123123123n;
console.log(bigInt);
console.log(bigInt.toString());
console.log(bigInt.toLocaleString());
