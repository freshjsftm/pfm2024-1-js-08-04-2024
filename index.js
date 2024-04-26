// const arrNums1 = [4, 5, 6, 7, 8, 9];
// console.log('arrNums1', arrNums1);
// const startIndex = -3;
// const deleteCount = 2;
// const newItem1 = 100;
// const newItem2 = 101;
// const newItem3 = 102;
// const arrNums1ReturnSplice = arrNums1.splice(
//   startIndex,
//   deleteCount,
//   newItem1,
//   newItem2,
//   newItem3
// );
// console.log('return splice', arrNums1ReturnSplice);

// console.log('arrNums1', arrNums1);

// const dayWeeks = ['sun', 'mon', 'tue', 'wen', 'thu', 'fri', 'sat'];
// //видалити елемент з індексом 2
// console.log(dayWeeks.splice(2, 1));

const colors = ['red', 'white', 'pink', 'aqua'];

//splice
const startIndex = Math.floor(colors.length / 2);
const deleteCount = 0;
const newItem1 = 'green';
//додати в середину елемент 'green'
console.log(colors.splice(startIndex, deleteCount, newItem1));
console.log(colors);
//замінити 'aqua' на 'blue'
console.log(colors.splice(-1, 1, 'blue'));
console.log(colors);
//після 'red' вставити 'mangenta' та 'fucsia'
console.log(colors.splice(1, 0, 'mangenta', 'fucsia'));
console.log(colors);
//видалити усі елементи починаючи з третього з кінця
console.log(colors.splice(-3));
console.log(colors);
