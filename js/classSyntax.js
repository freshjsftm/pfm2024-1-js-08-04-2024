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
    if (typeof fname !== 'string') {
      throw new TypeError('first name must be string');
    }
    if (typeof lname !== 'string') {
      throw new TypeError('last name must be string');
    }
    if (typeof age !== 'number') {
      throw new TypeError('age must be number');
    }
    this.#fname = fname;
    this.#lname = lname;
    this.#age = age;
  }
  getFullName() {
    return `${this.#fname} ${this.#lname}`;
  }
  getAge() {
    return this.#age;
  }
  setAge(value){
    if (typeof value !== 'number') {
      throw new TypeError('value must be number');
    }
    this.#age = value;
  }
}
const userClasses = new User('Brad', 'Pitt', 60);
userClasses.setAge(20);
// userClasses.#age = 50; //Error
//console.log(userClasses.#fname);  //Error
console.log(userClasses);
