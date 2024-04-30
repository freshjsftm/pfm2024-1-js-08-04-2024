'use strict';


const sumNumbers1 = function(){
  console.log(arguments);
  let summa = 0;
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    summa += element;
  }
  return summa;
}

const result = sumNumbers1(1,2,3);

console.log(result);
