//написати функцію яка рахує суму двох чисел які ввів користувач

const getSumTwoNumbersFromUser = function () {
  const userValue1 = prompt('enter number', 2);
  const userValue2 = prompt('enter number', 3);

  const checkUserInputError =
    userValue1 === null ||
    userValue2 === null ||
    userValue1 === '' ||
    userValue2 === '' ||
    Number.isNaN(Number(userValue1)) ||
    Number.isNaN(Number(userValue2));

  if (checkUserInputError) {
    console.log('error');
  } else {
    const summa = Number(userValue1) + Number(userValue2);
    console.log(userValue1, ' + ', userValue2, ' = ', summa);
  }
};

getSumTwoNumbersFromUser();

