'use strict';

//spred
const arrNums1 = [1,1,1];
const arrNums2 = [2,2,2];
const arrNums3 = [3,3,3];

const arrNumsConcat = arrNums1.concat(arrNums2, arrNums3);

console.log(arrNumsConcat);
console.log(arrNums1);
console.log(arrNums2);

const arrNumsSpred = [...arrNums3, ...arrNums1, ...arrNums2];
console.log(arrNumsSpred);

const copyArrNums1 = [...arrNums1]; // [1,1,1]
console.log(copyArrNums1);
console.log(copyArrNums1===arrNums1);