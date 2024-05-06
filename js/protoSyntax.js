'use strict';

function User1(fname, lname, age) {
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
