'use strict';

class MyArrayClass {
  constructor() {
    this.length = 0;
    console.log(arguments);
    for (let index = 0; index < arguments.length; index++) {
      const element = arguments[index];
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
    for (let index = 0; index < this.length; index++) {
      const element = this[index];
      func(element);
    }
  }
  // flat(depth = 1) {
  //   const resultMyArray = new MyArrayClass();
  //   for (let index = 0; index < this.length; index++) {
  //     const element = this[index];
  //     if (MyArrayClass.isMyArrayClass(element) && depth > 0) {
  //       const subResultMyArray = element.flat(depth - 1);
  //       for (let i = 0; i < subResultMyArray.length; i++) {
  //         const subElement = subResultMyArray[i];
  //         resultMyArray.push(subElement);
  //       }
  //     } else {
  //       resultMyArray.push(element);
  //     }
  //   }
  //   return resultMyArray;
  // }
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

  static isMyArrayClass(value) {
    return value instanceof MyArrayClass;
  }
}

try {
  const myArrNums3 = new MyArrayClass(3, 3, 3);
  const myArrNums2 = new MyArrayClass(myArrNums3, 2, 2);
  const myArrNums1 = new MyArrayClass(1, 1, myArrNums2, 1);
  const myArr = new MyArrayClass(0, myArrNums1, 0, 0);

  console.log(myArr);
  console.log(myArr.flat(Infinity));
} catch (error) {
  console.error(error);
}
