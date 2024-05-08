'use strict';

class User {
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
    User.amount++;
  }
  static amount = 0; /// User.amount = 0
  static isUser(obj) {
    /// User.isUser(obj){}
    return obj instanceof User;
  }
  getInfo() {
    return `${this._fname} ${this._lname} ${this.age}`;
  }
  getFullName() {
    return `${this._fname} ${this._lname}`;
  }
  //accessors - getter & setter
  get fname() {
    return this._fname;
  }
  set fname(value) {
    if (typeof value !== 'string') {
      throw new TypeError('value must be string');
    }
    if (value.trim().length < 3) {
      throw new RangeError('length must be >= 3');
    }
    this._fname = value;
  }
  get lname() {
    return this._fname;
  }
  set lname(value) {
    if (typeof value !== 'string') {
      throw new TypeError('value must be string');
    }
    if (value.trim().length < 2) {
      throw new RangeError('length must be >= 2');
    }
    this._lname = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be number');
    }
    if (value <= 0 || value > 150) {
      throw new RangeError('must be in diapazon 1-150');
    }
    this._age = value;
  }
}

  const userClasses = new User('Brad', 'Pitt', 60);


console.log('code');

//успадкування extends
class UserWithAccount extends User {
  constructor(fname, lname, age, email, phone) {
    super(fname, lname, age); //super - address class User
    this.email = email;
    this.phone = phone;
  }
  changeAge(){
    this._age++;
  }
  getInfo() {
    return super.getInfo() +` ${this.email} ${this.phone}`;
  }
  createWishList() {
    return [];
  }
}

const userWithAcc = new UserWithAccount(
  'Olga',
  'Bredly',
  23,
  'olga@gmail.com',
  '123-23-23'
);
console.log(userWithAcc);
console.log(userWithAcc.getFullName());
console.log(userWithAcc.getInfo());


class Admin extends UserWithAccount{
  constructor(fname, lname, age, email, phone, secretKey){
    super(fname, lname, age, email, phone); 
    this.secretKey = secretKey;
  }
  getFullName(){
    return super.getFullName() + '!!!!!!!';
  }
  toString(){
    return 'admin, key: '+this.secretKey;
  }
}

const admin = new Admin(
  'Fred',
  'Asd',
  46,
  'fred@gmail.com',
  '123-23-23',
  'ewryt34g5476'
);
console.log(admin);
console.log(admin.getFullName());
console.log(admin.toString());
//alert(admin)
//alert({prop:45})

console.log(User.isUser(admin));

//Основу ООП складають чотири основні концепції:
// інкапсуляція,
// успадкування,
// поліморфізм
// абстракція
