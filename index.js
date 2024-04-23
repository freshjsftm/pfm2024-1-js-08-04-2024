//ключем об'єкта може бути рядок або символ
/*
const multTable = {
  '1 * 1 = ': 1,
  '1 * 2 = ': 2,
  '1 * 3 = ': 3,
  '1 * 4 = ': 4,
  '1 * 5 = ': 5,
  '1 * 6 = ': 6,
}
*/

function getMultTable(firstNumber = 1) {
  const multTable = {};
  for (let i = 1; i <= 10; i++) {
    multTable[`${firstNumber} * ${i} = `] = firstNumber * i;
  }
  return multTable;
}

console.log(getMultTable(5));

const userTask = '5 * 3 = ';
const multTable = getMultTable(5);

console.log(multTable[userTask]);

function getMultTableMany(min = 1, max = 9) {
  const multTable = {};  //address references
  for (let firstNumber = min; firstNumber <= max; firstNumber++) {
    for (let i = 1; i <= 10; i++) {
      multTable[`${firstNumber} * ${i} = `] = firstNumber * i;
    }
  }
  return multTable;  //address references
}

console.log(getMultTableMany());
