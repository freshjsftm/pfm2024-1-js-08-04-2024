//ключем об'єкта може бути рядок або символ

const user = {
  fname: 'Brad',
  sname: 'Pitt',
  age: 60,
  'two word': 'qwerty asdfgh',
  45: 333,
  key: undefined,
  show: function () {
    return 'show';
  },
};

for (const key in user) {
  console.log(key, ':', user[key]);
}

// key in obj
console.log('fname' in user);
console.log('fullname' in user);
console.log('key' in user);
console.log(45 in user);
console.log('45' in user);
console.log('show' in user);

const prop = '45';
if (prop in user) {
  console.log(typeof user[prop] === 'function' ? user[prop]() : user[prop]);
}


