
const arrNums = [5,2,9];

console.log(arrNums);
console.log(arrNums.length); //3
console.log(arrNums[2]);
//arrNums.length = 7;

arrNums[arrNums.length] = 11;//arrNums[3] = 11
console.log(arrNums.length); //4
arrNums[arrNums.length] = 51;//arrNums[4] = 51

arrNums.push(44);
arrNums.push(101,102,103);


console.log(arrNums);

console.log(arrNums instanceof Array);
console.log(arrNums instanceof Number);

console.log(Array.isArray(arrNums));