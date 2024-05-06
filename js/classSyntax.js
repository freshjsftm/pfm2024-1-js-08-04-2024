'use strict';

class User {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
  getAge(){
    return this.age;
  }
}

const userClasses = new User('Brad', 'Pitt', 60);
const userClasses2 = new User('Anna', 'Pitt', 23);

