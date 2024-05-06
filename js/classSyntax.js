'use strict';

class User {
  #fname;
  #lname;
  #age;
  /**
   *
   * @param {string} fname
   * @param {string} lname
   * @param {number} age
   */
  constructor(fname, lname, age) {
    this.fname = fname; // fname(fname)
    this.lname = lname;
    this.age = age;
    this.isSubscribe = false;
  }
  getFullName() {
    return `${this.#fname} ${this.#lname}`;
  }
  //accessors - getter & setter
  get fname() {
    return this.#fname;
  }
  set fname(value) {
    if (typeof value !== 'string') {
      throw new TypeError('value must be string');
    }
    if (value.trim().length < 3) {
      throw new RangeError('length must be >= 3');
    }
    this.#fname = value;
  }
  get lname() {
    return this.#fname;
  }
  set lname(value) {
    if (typeof value !== 'string') {
      throw new TypeError('value must be string');
    }
    if (value.trim().length < 2 ) {
      throw new RangeError('length must be >= 2');
    }
    this.#lname = value;
  }
  get age() {
    return this.#age;
  }
  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be number');
    }
    if (value <= 0 || value > 150) {
      throw new RangeError('must be in diapazon 1-150');
    }
    this.#age = value;
  }
}

try {
  const userClasses = new User('Brad', 'Pitt', 60);
  console.log(userClasses.fname);
  userClasses.age = 45;
  console.log(userClasses.age);
} catch (error) {
  console.log(error);
}

console.log('code');