const arrNums1 = [1, 5, 2, 4, 6];
console.log(arrNums1);
//map
function incrementElem(elem) {
  return ++elem;
}
const newArrNums1 = arrNums1.map(incrementElem);
console.log(newArrNums1);

const users = [
  { id: 100, login: 'qwe1', isMale: true },
  { id: 200, login: 'qwe21', isMale: true },
  { id: 101, login: 'asd', isMale: false },
  { id: 178, login: 'sss', isMale: false },
  { id: 10, login: 'max', isMale: true },
];
//зібрати в масив лише логіни
const logins = users.map(function (user) {
  return user.login;
});
console.log(logins);
//зібрати в масив лише id
const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);
console.table(users);
//зібрати в масив лише логіни чоловіків
const men = users.filter(function (user) {
  return user.isMale;
});
const menLogins = men.map(function (user) {
  return user.login;
});
console.log(menLogins);

const menLogins2 = users
  .filter(function (user) {
    return user.isMale;
  })
  .map(function (user) {
    return user.login;
  });
console.log(menLogins2);

const products = [
  { name: 'Молоко', price: 25, currency: 'грн', quantity: 29 },
  { name: 'Хліб', price: 12, currency: 'грн', quantity: 37 },
  { name: 'Яйця', price: 20, currency: 'грн', quantity: 12 },
  { name: 'Сир', price: 45, currency: 'грн', quantity: 14 },
  { name: 'Сік', price: 33, currency: 'грн', quantity: 32 },
  { name: 'Печиво', price: 7, currency: 'грн', quantity: 120 },
];

//відібрати назви всіх продуктів з ціною менше 20 грн
const productsName = products
  .filter(function (product) {
    return product.price < 20;
  })
  .map(function (product) {
    return product.name;
  });
console.log(productsName);
