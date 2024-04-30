'use strict';
// debugger
const dataProto = {
  addFrom: function(){
    this.users.forEach((user)=>{
      user.from = this.from;
    })
  }
};
const data = {
  error: null,
  from: 'db',
  users: [
    { id: 100, login: 'qwe1', isMale: true },
    { id: 200, login: 'qwe21', isMale: true },
    { id: 101, login: 'asd', isMale: false },
    { id: 178, login: 'sss', isMale: false },
    { id: 10, login: 'max', isMale: true },
  ],
  __proto__: dataProto,
};
data.addFrom();
console.table(data.users)