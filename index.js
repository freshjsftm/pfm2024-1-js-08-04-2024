/*
if (condition) {
  statement1 
} else {
  statement2
}
*/
//......34567......

let number1 = 15;
const divisor = 5;
const minRange = 11;
const maxRange = 16;

// !(3>number1  number1<7)&& !(number1%7===0)

// написати вираз який буде правдивим якщо число НЕ кратне 5 і(або) НЕ в діапазоні [11-16) 
//     false                         false              false
if (number1%divisor !== 0 ||  number1<minRange || number1>=maxRange ) {
  console.log('truthy');
} else {
  console.log('false');
}



// написати вираз який буде правдивим якщо число більше 0 і кратне 5 (ділится без остачі, тобто залишок === 0)

// if (number1 > 0 && number1 % divisor === 0) {
//   console.log('truthy');
// } else {
//   console.log('false');
// }

// написати вираз який буде правдивим якщо число НЕпарне

if (number1 % 2 !== 0) {
  console.log('odd');
} else {
  console.log('even');
}

if (number1 % 2) {
  console.log('odd');
} else {
  console.log('even');
}

// написати вираз який буде правдивим якщо число парне

// bad practice
if (!(number1 % 2)) {
  console.log('even');
} else {
  console.log('odd');
}

if (number1 % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

// написати вираз який буде правдивим якщо число позитивне або дорівнює 0

if (number1 >= 0) {
  console.log('positive or zero');
} else {
  console.log('negative');
}

if (0 > number1) {
  console.log('negative');
} else {
  console.log('positive or zero');
}
