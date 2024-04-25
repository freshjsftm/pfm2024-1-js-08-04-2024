const arrNums = [];
arrNums.push(7);
arrNums.push(77);
console.log(arrNums);
const arrNums2 = [];
console.log(arrNums.push === arrNums2.push);

const myArrayPrototype = {};
myArrayPrototype.push = function (value) {
  this[this.length] = value; 
  this.length++;
  return this.length;
};

function MyArray() {
  this.length = 0;
}

MyArray.prototype = myArrayPrototype;


const myArrNums = new MyArray();
myArrNums.push(20);
myArrNums.push(33);
console.log(myArrNums);
const myArrNums2 = new MyArray();
myArrNums2.push(1000);
console.log(myArrNums.push === myArrNums2.push);