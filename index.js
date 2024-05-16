'use strict';

//Set
const sum = (a, b) => a + b;
const arr1 = [4, 5, 9, 4, 8, 6, 9, 4, 9];
console.log(arr1);
const setArr1 = new Set(arr1); //{4, 5, 9, 8, 6}
console.log(setArr1);
const uniqArr1 = [...setArr1]; //[4, 5, 9, 8, 6]
console.log(uniqArr1);
//short syntax
const uniqArr2 = [...new Set(arr1)];
console.log(uniqArr2);

const set1 = new Set();
console.log(set1);
set1.add(1);
set1.add(1);
set1.add('1');
set1.add(sum);
set1.add(sum(4, 8));
set1.add(sum());
set1.add(sum());
set1.add(arr1);
set1.add();
set1.add(sum);
set1.delete(1);

console.log(set1);

console.log(...set1.entries());
console.log(...set1.keys());
console.log(...set1.values());

const sent1 = 'Set.prototype.union()';
const letters = new Set('qwqqq'); //q,w,q,q,q
console.log(letters);

const sent2 = 'to be or not to be';
const words = new Set(sent2.split(' '));
console.log(words);
