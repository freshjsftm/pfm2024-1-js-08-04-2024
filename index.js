// написати функцію, яка приймає два числа і повертає максимальне, якщо числа однакові - повертає будь яке

console.log('написати функцію, яка приймає два числа і повертає максимальне, якщо числа однакові - повертає будь яке');

//const name = function (){}
//function name (){}

/**
 * функцію, яка приймає два числа і повертає максимальне, якщо числа однакові - повертає будь яке
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
function getMaxFromTwoNumbers(number1, number2) {
  if(number1 > number2){
    return number1;
  }
  return number2; 
}