//написати функцію яка рахує суму двох чисел які ввів користувач

const checkUserInputError = function (value) {
  return value === null || value === '' || Number.isNaN(Number(value));
};

const getSumTwoNumbers = function (number1, number2) {
  return number1 + number2;
};

const logResult = function (value1, value2) {
  if (checkUserInputError(value1) || checkUserInputError(value2)) {
    console.log('error');
    return; //output from function
  } 
  console.log(value1, ' + ', value2, ' = ',
    getSumTwoNumbers(Number(value1), Number(value2))
  );
};

//logResult(prompt('enter number', 2), prompt('enter number', 3));
