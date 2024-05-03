'use strict';

const str = 'tO    bE    OR    nOt     To Be';
console.log(str);
// Jaden Case
// 'To Be Or Not To Be'

// привести весь рядок до нижнього регистру toLowerCase
// 'to be or not to be'
const strLowerCase = str.toLowerCase();
console.log(strLowerCase);
// отримати масив слів split
// ['to', 'be', 'or', 'not', 'to', 'be']
const words = strLowerCase.split(' ')
console.log(words);
//прибираємо усі порожні елементи
const wordsWithoutEmpty =  words.filter((word) => word);
// з кожного елементу масива отримати новий елемент    map
// де перша літера - велика, а всі інші - маленькі
// ['To', 'Be', 'Or', 'Not', 'To', 'Be']
const newWords = wordsWithoutEmpty.map((word) => {
  const firstLetterUpper = word.at(0).toUpperCase();
  const otherLetters = word.substring(1);
  const newWord = firstLetterUpper + otherLetters;
  return newWord;
});
console.log(newWords);
// зібрати масив в рядок   join
const strJadenCase = newWords.join(' ');
console.log(strJadenCase);

// const toJadenCase = (str) => {
//   const strLowerCase = str.toLowerCase();
//   const words = strLowerCase.split(' ');
//   const wordsWithoutEmpty =  words.filter((word) => word);
//   const newWords = wordsWithoutEmpty.map((word) => {
//     const firstLetterUpper = word.at(0).toUpperCase();
//     const otherLetters = word.substring(1);
//     const newWord = firstLetterUpper + otherLetters;
//     return newWord;
//   });
//   const strJadenCase = newWords.join(' ');
//   return strJadenCase;
// };

const toJadenCase = (str) =>
  str
    .split(' ')
    .filter((word) => word)
    .map((word) => word.at(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');

console.log(toJadenCase(str));
