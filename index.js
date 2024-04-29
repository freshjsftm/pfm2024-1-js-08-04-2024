const arrNums1 = [1, 5, 9, 4, 6];

console.log(
  arrNums1.find(function (elem) {
    return elem > 3;
  })
);

console.log(
  arrNums1.findIndex(function (elem) {
    return elem > 3;
  })
);

console.log(
  arrNums1.findLast(function (elem) {
    return elem > 3;
  })
);

console.log(
  arrNums1.findLastIndex(function (elem) {
    return elem > 3;
  })
);