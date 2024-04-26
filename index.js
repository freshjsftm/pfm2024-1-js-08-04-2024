const arrNums1 = [4, 7, 5, 6, 7, 8, 9, 7];
console.log(arrNums1);

const elem = 7;
const fromIndex = 2;
const indexFirstElem = arrNums1.indexOf(elem, fromIndex);
const indexLastElem = arrNums1.lastIndexOf(elem, fromIndex);

console.log(indexFirstElem);
console.log(indexLastElem);

// const colors = ['green', 'red', 'white', 'pink', 'red', 'aqua'];
// const key = 'red';
// console.log(colors);
// console.log(colors.indexOf(key)); //1
// console.log(colors.lastIndexOf(key)); //4

// console.log(colors.indexOf('blue'));
// console.log(colors.lastIndexOf('blue'));

// console.log(colors.indexOf('white'));
// console.log(colors.lastIndexOf('white'));