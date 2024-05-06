'use strict';

function User1(fname, lname, age) {
  if (typeof fname !== 'string') {
    throw new TypeError('first name must be string');
  }
  if (typeof lname !== 'string') {
    throw new TypeError('last name must be string');
  }
  if (typeof age !== 'number') {
    throw new TypeError('age must be number');
  }
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}

function UserProto() {
  this.getFullName = function () {
    return `${this.fname} ${this.lname}`;
  };
}

User1.prototype = new UserProto();

const user1 = new User1('Tom', 'Rot', 59);
