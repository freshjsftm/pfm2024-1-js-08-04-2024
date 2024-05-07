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
  User1.amount++;
}
function UserProto() {
  this.getFullName = function () {
    return `${this.fname} ${this.lname}`;
  };
}
User1.isUser1 = function (obj) {
  return obj instanceof User1;
};
User1.amount = 0;

User1.prototype = new UserProto();
const user1 = new User1('Tom', 'Rot', 59);
// console.log(user1, User1.isUser1(user1));
// console.log({prop:12}, User1.isUser1({prop:12}));
const user2 = new User1('Tom', 'Rot', 59);
const user3 = new User1('Tom', 'Rot', 59);
