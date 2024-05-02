'use strict';

function recursia(number = 5) {
  console.log(number);
  if (number === 1) {
    return;
  }
  return recursia(number - 1);
}

try {
  //recursia(12000);
} catch (error) {
  console.log(error);
}

console.log('code ');

function powRecursion(number = 2, exp = 2) {
  if (exp === 0) {
    return 1;
  }
  return number * powRecursion(number, exp - 1);
}
console.log(powRecursion(2, 6));

/**
 *
 * @param {number} number
 * @returns {number}
 * @throws {TypeError} type must be number
 * @throws {Error} type must be integer
 * @throws {RangeError} number must be positive <=18
 */
function factorialRecursion(number = 0) {
  if (typeof number !== 'number') {
    throw new TypeError('type must be number');
  }
  if (Number.isInteger(number) === false) {
    throw new Error('type must be integer');
  }
  if (number > 18 || number < 0) {
    throw new RangeError('number must be positive <=18' + number);
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorialRecursion(number - 1);
}

try {
  console.log(factorialRecursion(1.3));
  console.log('info under factorialRecursion');
} catch (error) {
  console.error('error ----> ', error);
} finally {
  console.info('finally after factorialRecursion');
}

/**
 *
 * @param {bigint} number
 * @returns {bigint}
 */
function factorialRecursionBigInt(number = 0n) {
  if (number < 0n) {
    throw new RangeError('number must be positive');
  }
  if (typeof number !== 'bigint') {
    throw new TypeError('type must be number');
  }
  if (number === 0n || number === 1n) {
    return 1n;
  }
  return number * factorialRecursionBigInt(number - 1n);
}

try {
  console.log(factorialRecursionBigInt(24n));
} catch (error) {
  console.log(error);
}

console.log('footer');
