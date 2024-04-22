const user = {
  fname: 'Brad',
  sname: 'Pitt',
  password: 'qwerty',
  sayName: function(){
    return 'Hi, I\'m '+ user.fname;
  },
  saySecondName: function(){
    return `Hi, I'm ${user.sname}`;
  }
};
console.log(user);
user.age = 60;
user.isAdult = true;
console.log(user.age);
delete user.password;
console.log(user);

console.log(user.saySecondName());


