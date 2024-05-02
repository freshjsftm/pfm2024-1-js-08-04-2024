'use strict';
// recursia
// не використовувати рекурсію
// описати базовий випадок

function recursia(number = 5) {
  console.log(number);
  if (number === 1) {
    return;
  }
  return recursia(number - 1);
}
// debugger
// recursia();

console.log('code ');

// (2 ** 5) = 2 * (2 ** 4)  
// (2 ** 4) = 2 * (2 ** 3) 
// (2 ** 3) = 2 * (2 ** 2) 
// (2 ** 2) = 2 * (2 ** 1) 
// (2 ** 1) = 2 * (2 ** 0) 
// (2 ** 0) = 1 

function powRecursion (number = 2, exp = 2){
  if(exp === 0){
    return 1;
  }
  return number * powRecursion(number, exp-1);
}
console.log(powRecursion(2,6));

// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

/**
 * 
 * @param {number} number 
 * @returns {number}
 */
function factorialRecursion(number = 0){
  if(typeof number !== 'number'){
    throw new TypeError('type must be number');
  }
  if(number>18 || number<0){
    throw new RangeError('number must be positive <=18');
  }
  if(number === 0 || number === 1){
    return 1;
  }
  return number * factorialRecursion(number-1);
}
console.log(factorialRecursion(-12));
/**
 * 
 * @param {bigint} number 
 * @returns {bigint}
 */
function factorialRecursionBigInt(number = 0n){
  if(number<0n){
    throw new RangeError('number must be positive');
  }
  if(typeof number !== 'bigint'){
    throw new TypeError('type must be number');
  }
  if(number === 0n || number === 1n){
    return 1n;
  }
  return number * factorialRecursionBigInt(number-1n);
}
console.log(factorialRecursionBigInt(-24n));


console.log('footer');