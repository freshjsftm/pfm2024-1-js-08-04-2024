'use strict';

class IteratorMyArrayClass{
  constructor(myArrayInstance){
    this.collection = myArrayInstance;
    this.currentIndex = 0;
  }
  next(){
    return {
      value: this.collection[this.currentIndex++],
      done: this.currentIndex > this.collection.length,
    }
  }
}

class MyArrayClass {
  constructor() {
    this.length = 0;
    // console.log(arguments);
    // console.log(...arguments);
    // for (let index = 0; index < arguments.length; index++) {
    //   const element = arguments[index];
    //   this.push(element);
    // }
    for (const element of arguments) {
      this.push(element);
    }
  }
  push(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
  }
  forEach(func) {
    if (typeof func !== 'function') {
      throw new TypeError(func + ' - not function');
    }
    // for (let index = 0; index < this.length; index++) {
    //   const element = this[index];
    //   func(element);
    // }
    for (const element of this) {
      func(element);
    }
  }
  flat(depth = 1) {
    const resultMyArray = new MyArrayClass();
    this.forEach((element) => {
      if (MyArrayClass.isMyArrayClass(element) && depth > 0) {
        element
          .flat(depth - 1)
          .forEach((subElement) => resultMyArray.push(subElement));
      } else {
        resultMyArray.push(element);
      }
    });
    return resultMyArray;
  }
  [Symbol.iterator](){ 
    return new IteratorMyArrayClass(this);
  }

  static isMyArrayClass(value) {
    return value instanceof MyArrayClass;
  }
}

try {

  const myArr = new MyArrayClass(10, 20, 30);
  console.log(...myArr);
  for (const elem of myArr) {
    console.log(elem);
  }
  console.log(myArr);

} catch (error) {
  console.error(error);
}
