'use strict';

//складність алгоритмів   BigO

const arr1 = [3, 115, 5, 14, 6, 201, 5, 99, 87, 2, 6, 5, 7, 3];

//O(1) - константна
console.log(arr1[7]);
console.log(arr1.at(7));

// O(n) - лінійна
// майже всі методи перебору масиву
// linear search
const linearSearch = function (arr, key) {
  for (let index = 0; index < arr.length; index++) {
    //console.log(arr[index]);
  }
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === key) {
      return index;
    }
  }
  return -1;
};
console.log(linearSearch(arr1, 99));
console.log(arr1.indexOf(99));

//O(n^2) квадратична
//
const showMultTable = function (limit = 2) {
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    for (let j = 1; j < limit; j++) {
      console.log(`${i}*${j}=${i * j}`);
      sum++;
    }
  }
  console.log(sum);
};
showMultTable();

//console.log(arr1.map((el) => arr1.filter((elem) => el === elem)));

// O(logn)
// binarySearch
const arr1Sort = arr1.toSorted((a, b) => a - b);
console.log(arr1Sort);
const binarySearch = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    middle = Math.round((start + end) / 2);
    if (arr[middle] === key) {
      return middle;
    }
    if (arr[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};
console.log(binarySearch(arr1Sort, 6))