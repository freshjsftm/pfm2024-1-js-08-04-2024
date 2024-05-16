'use strict';

//деструктуризація - спосіб створення змінної

const user = {
  public1: 44,
  privateInfo: {
    id: 15,
    login: 'Brad',
    email: 'brad@gmail.com',
    bd: {
      year: 1963,
      month: 12,
      day: 18,
    },
  },
  contactInfo: {
    address: {
      town: 'NY',
      street: '15 avenu',
      house: 547,
    },
    phone: '123-56-85',
  },
  generalInfo: {
    profession: 'actor',
    children: ['Fred', 'Anna', 'Max', 'Alex'],
  },
};
//bad practic
console.log(user.public1);
console.log(user.privateInfo.login);
console.log(user.privateInfo.bd.year);

//bad practic without деструктуризація
// const public1 = user.public1;
// const login = user.privateInfo.login;
// const year = user.privateInfo.bd.year;

//good practice with деструктуризація
const {
  public1,
  privateInfo: {
    login,
    bd: { year, month, day },
  },
  //дістати телефон з новим ім'ям змінної userPhone
  contactInfo: { phone: userPhone },
  //дістати ім'я третьої дитини з ім'ям змінної thirdChild
  generalInfo: {
    children: [, , thirdChild],
  },
} = user;

console.log(public1);
console.log(login);
console.log(year);
console.log(month);
console.log(userPhone);
console.log(thirdChild);
