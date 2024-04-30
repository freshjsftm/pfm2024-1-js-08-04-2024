'use strict';
const sumNumbers1 = function () {
  // const arrArgs = Array.from(arguments);
  return Array.from(arguments).reduce((summa, elem) => summa + elem);
};
const result = sumNumbers1(1, 2, 3);
//console.log(result);

const sumNumbers12 = function (num1, ...rest) {
  console.log(arguments);
  console.log(num1);
  console.log(rest);
  return rest.reduce((summa, elem) => summa + elem, num1);
};
const result12 = sumNumbers12(1, 2, 3, 4, 5, 6);
console.log(result12);

//rest
const sumNumbers2 = (num1, ...rest) => {
  //console.log(arguments); // - deprecated
  // console.log(num1);
  // console.log(rest);
  return rest.reduce((summa, elem) => summa + elem, num1);
};
const result2 = sumNumbers2(1, 2, 3);
console.log(result2);

//spred
const arrNums = [1,1,1];
console.log(arrNums);
console.log(arrNums[0], arrNums[1], arrNums[2]);
console.log(...arrNums);
console.log(Math.max(7,3,45))
console.log(Math.max(...arrNums))
console.log(sumNumbers2(...arrNums));



