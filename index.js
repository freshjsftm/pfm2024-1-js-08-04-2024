'use strict';

const dictionary = new Map();
dictionary.set('собака', 'dog');
dictionary.set('кішка', 'cat');
dictionary.set('риба', 'fish');
dictionary.set('річка', 'river');
dictionary.set('ранок', 'morning');
dictionary.set('ходити', 'walk');
dictionary.set('піймати', 'to catch');
dictionary.set('весело', 'funny');
dictionary.set('бачити', 'see');
dictionary.set('і', 'and');
dictionary.set('на', 'at');

const sent =
  'Собака і кішка   в    Ранок ,    ходити На річка бачити риба і піймати бути весело !';
// const translate = (str, dict) => {
//   //привести до нижнього регистру
//   const lowerStr = str.toLowerCase();
//   //розбити речення на масив слів - ключі мапи
//   const words = lowerStr.split(' ').filter((word)=>word);
//   //по ключам в мапі знайти відповідні слова і зібрати їх в новий масив
//   const newWords = words.map((word)=>{
//     return dictionary.has(word) ?dictionary.get(word) : word;
//   })
//   //цей новий масив перетворити на рядок
//   const newStr = newWords.join(' ');
//   return newStr;
// };
// const translate = (str, dict) => {
//   //привести до нижнього регистру
//   //const lowerStr = str.toLowerCase();
//   //розбити речення на масив слів - ключі мапи
//   //const words = lowerStr.split(' ').filter((word)=>word);
//   //по ключам в мапі знайти відповідні слова і зібрати їх в новий масив
//   // const newWords = words.map((word)=>{
//   //   return dictionary.has(word) ? dictionary.get(word) : word;
//   // })
//   //цей новий масив перетворити на рядок
//   // const newStr = newWords.join(' ');
//   return str.toLowerCase().split(' ').filter((word)=>word).map((word)=>{
//     return dictionary.has(word) ? dictionary.get(word) : word;
//   }).join(' ');
// };

const translate = (str, dict, sep = ' ') =>
  str
    .toLowerCase()
    .split(sep)
    .filter((word) => word)
    .map((word) => (dict.has(word) ? dict.get(word) : word))
    .join(sep);

console.log(translate(sent, dictionary));


