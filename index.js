//написати функцію яка рахує суму двох чисел які ввів користувач
/**
 * return true, if value is null | '' | NaN
 * @param {any} value 
 * @returns boolean
 */
const checkUserInputError = function (value) {
  return value === null || value === '' || Number.isNaN(Number(value));
};
/**
 * calc and return summa two numbers
 * @param {number} number1 
 * @param {number} number2 
 * @returns number
 */
const getSumTwoNumbers = function (number1, number2) {
  return number1 + number2;
};
/**
 * 
 * @param {*} value1 defaultValue = 2
 * @param {*} value2 defaultValue = 3
 * @returns undefined
 */
const logResult = function (value1=2, value2=3) {
  if (checkUserInputError(value1) || checkUserInputError(value2)) {
    console.log('error');
    return; 
  } 
  console.log(value1, ' + ', value2, ' = ',
    getSumTwoNumbers(Number(value1), Number(value2))
  );
};
//debugger
// logResult(prompt('enter number', 2), prompt('enter number', 3));
logResult();

