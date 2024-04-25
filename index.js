const userFunc = {
  getFullName: function () {
    return `${this.fname} ${this.sname}`;
  },
  getInfo: function () {
    return `${this.sname}, years old ${this.age}`;
  },
};

const user1 = {
  fname: 'Brad',
  sname: 'Pitt',
  age: 60,
};
user1.__proto__ = userFunc;

const user2 = {
  fname: 'Tom',
  sname: 'Rot',
  age: 59,
  __proto__: userFunc,
};


function User(fname, sname, age) {
  this.fname = fname;
  this.sname = sname;
  this.age = age;
}

function UserPrototype() {
  this.sayHello = function (){
    return `hello , I'm  ${this.fname}`;
  }
  this.getFullName = function () {
    return `${this.fname} ${this.sname}`;
  };
  this.getInfo = function () {
    return `${this.sname}, years old ${this.age}`;
  };
}

User.prototype = new UserPrototype();

const user3 = new User('Anna', 'Zeferino', 23);
const user4 = new User('Maria', 'Fox', 23);
