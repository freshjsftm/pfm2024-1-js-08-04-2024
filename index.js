console.log(
  ' Написати функцію, яка приймає два числа і перевіряє кратність першого другим (повертає булеве значення) . Значення за замовчуванням 4 та 2 '
);
/**
 *
 * @param {number} number1 4
 * @param {number} number2 2
 * @returns {boolean}
 */
function isMultiple(number1 = 4, number2 = 2) {
  return number1 % number2 === 0;
}


