'use strict';

//Map


const map1 = new Map();
console.log(map1);
console.log(map1.size);
map1.set('bar', 'foo');
map1.set(null, null);
map1.set(true, 1);
map1.set(undefined, 456);
map1.set([], []); //key1 address1 array1
map1.set([], [1, 2, 3]); //key2 address2 array2
map1.set(true, 71);
const ar1 = [8]; //address1
const ar2 = []; //address2
map1.set(ar1, [{}]);
map1.set(ar1, 'array 1');
const sum = (a, b) => a + b;
map1.set(sum, sum(5, 7));
console.log(map1);

map1.forEach((value, key, map)=>{
  console.log(`[${key}] = ${value}`);
})

// const iteratorEntriesMap = map1.entries();
console.log(map1.entries());
console.log(...map1.entries());
for (const para of map1.entries()) {
  console.log(para);
}

console.log(...map1.keys());
for (const key of map1.keys()) {
  console.log(key);
}

for (const value of map1.values()) {
  console.log(value);
}

console.log(...map1);

console.log(map1.get(ar1));
console.log(map1.get(true));
console.log(map1.get(null));
console.log(map1.get());
console.log(map1);
console.log(map1.has(ar2));
console.log(map1.has(true));
console.log(map1.has('null'));
if (map1.has()) {
  map1.delete();
}
if (map1.has(sum)) {
  map1.delete(sum);
}
console.log(map1);
map1.clear();
console.log(map1);
