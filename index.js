const userVIP = {
  fname: 'Brad',
  sname: 'Pitt',
  password: 'qwerty',
  age:60,
  sayFirstName: function(){
    return 'Hi, I\'m '+ this.fname;
  },
  saySecondName: function(){
    return `Hi, I'm ${this.sname}`;
  },
};
userVIP.isAdult = true;
console.log(userVIP.saySecondName());

function User(fnameValue, sname, password, age, isAdult=true) {
  this.fname = fnameValue;
  this.sname = sname;
  this.password = password;
  this.age = age;
  this.isAdult = isAdult;
  this.sayFullName = function () {
    return `${this.fname} ${this.sname}`;
  };
  this.getBdYear = function () {
    //body function
    return 1963;
  };
  this.showSubscribe = function () {
    //body function
    return 'you sicribe';
  };
}

const user2 = new User('Brad', 'Pitt', 'qwerty', 60, true);
console.log(user2.sayFullName());

const user3 = new User('Alex', 'Qwety', 'qwerty', 20, true);
console.log(user3.sayFullName());

const user4 = new User('Tom', 'Pitt', 'qwerty', 30, true);
console.log(user4);
