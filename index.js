const arrNums1 = [4, 7, 5, 6, 8, 9];
console.log(arrNums1);

// const newArrNums1 = arrNums1;//copy address
// newArrNums1.splice(0,1,77);
// newArrNums1[0] = 88;

const arrNums1Copy = arrNums1.slice(); //copy all array
arrNums1Copy[0] = 2222;
console.log(arrNums1Copy.at(0))
console.log(arrNums1Copy);
// console.log(arrNums1);

const start = 1;
const end = 4;

const arrNums1CopyPart = arrNums1.slice(start);
console.log(arrNums1CopyPart);
console.log(arrNums1);

const arrNums1CopyPart2 = arrNums1.slice(start, end);
console.log(arrNums1CopyPart2);
console.log(arrNums1);
