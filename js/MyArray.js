//конструктор для прототипу
function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
  this.pop = function () {
    if(this.length===0){
      return;
    }
    const lastItem = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return lastItem;
  };
  this.forEach = function (func) {
    if(typeof func !== 'function'){
      console.log(typeof func, func, 'not function');
      return;
    }
    for (let index = 0; index < this.length; index++) {
      const element = this[index];
      func(element);
    }
  };
}
//конструктор для данних (для сутності інстанса)
function MyArray() {
  this.length = 0;
}
// зв'язок між конструктором для данних та об'єктом проптотипу
MyArray.prototype = new MyArrayPrototype();

const myArrNums1 = new MyArray();
myArrNums1.push(9);
myArrNums1.push(8);
myArrNums1.push(7);

// console.log(myArrNums1);
// console.log(myArrNums1.pop()); 
// myArrNums1.pop();
// myArrNums1.pop();
// myArrNums1.pop();
// console.log(myArrNums1);