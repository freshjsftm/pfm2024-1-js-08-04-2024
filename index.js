'use strict';

const number = 12321;

// порахувати суму цифр числа
// 1+2+3+2+1 = 9

//привести число до рядка!
const numberStr = number.toString();
const numberStr2 = String(number);
//split - розбиває рядок на елементи масива
const arrNumSymb = numberStr.split('');
console.log(arrNumSymb);
//reduce - порахувати суму елементів масива
const summa = arrNumSymb.reduce((sum, item) => sum + Number(item), 0);
console.log(summa);

const sumDigitsOfNumber = (number = 111) => {
  const numberStr = number.toString();
  const arrNumSymb = numberStr.split('');
  const summa = arrNumSymb.reduce((sum, item) => sum + Number(item), 0);
  return summa;
};

const sumDigitsOfNumber2 = (number = 0) =>
  number
    .toString()
    .split('')
    .reduce((sum, item) => sum + Number(item), 0);

const sumDigitsOfNumber3 = function (number = 0) {
  return number
    .toString()
    .split('')
    .reduce((sum, item) => sum + Number(item), 0);
};

console.log(sumDigitsOfNumber(1010101));
console.log(sumDigitsOfNumber2(10101));
console.log(sumDigitsOfNumber3(10101));
