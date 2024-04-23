//ключем об'єкта може бути рядок або символ
const nameProperty1 = 'fname';
const nameProperty2 = 'sname';
const user = {
  fname: 'Brad',
  sname: 'Pitt',
  age: 60,
  'two word': 'qwerty asdfgh',
  45: 333,
};
console.log(user.fname);
console.log(user[nameProperty1]);
console.log(user['fname']);
console.log(user[nameProperty2]);
function getPropValue(nameProp, obj) {
  return obj[nameProp];
}
console.log(getPropValue('age', user));
console.log(getPropValue('fname', user));
console.log(getPropValue(nameProperty2, user));

console.log(user['two word']);
console.log(user['age']);
console.log(user[45]);
console.log(user['45']);