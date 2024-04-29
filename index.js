const arrNums1 = [1, 5, 9, 4, 6];

console.log(arrNums1.includes(56)); //key===elem
console.log(arrNums1.includes(5)); //key===elem

//some
if(
  arrNums1.some(function (elem) {
    return elem >6;
  })
){
  console.log('5%');
}

//every
if(
  arrNums1.every(function (elem) {
    return elem >6;
  })
){
  console.log('10%');
}
