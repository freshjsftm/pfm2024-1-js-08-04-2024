const arrNums1 = [1, 5, 12, 4, 6, 101, 111];

//arrNums1.sort(compareNumbers);
console.log(arrNums1);
console.log(arrNums1.toSorted(compareNumbers));
console.log(arrNums1);

function compareNumbers(a, b) {
  return a - b;
}

const users = [
  { id: 101, login: 'qwe1', isMale: true },
  { id: 102, login: 'qwe21', isMale: true },
  { id: 141, login: 'asd', isMale: false },
  { id: 178, login: 'sss', isMale: false },
  { id: 100, login: 'max', isMale: true },
];
console.table(users);

users.sort(function(item1, item2){
  return item1.id - item2.id;
})
console.table(users);

users.sort(function(user1, user2){
  if(user1.login < user2.login)return -1;
  if(user1.login > user2.login)return 1;
  return 0;
})
console.table(users);


const products = [
  { name: 'Молоко', price: 25, currency: 'грн', quantity: 29 },
  { name: 'Хліб', price: 12, currency: 'грн', quantity: 37 },
  { name: 'Яйця', price: 20, currency: 'грн', quantity: 12 },
  { name: 'Сир', price: 45, currency: 'грн', quantity: 14 },
  { name: 'Сік', price: 33, currency: 'грн', quantity: 32 },
  { name: 'Печиво', price: 7, currency: 'грн', quantity: 120 },
];
console.table(products);

products.sort(function(item1, item2){
  return item1.price - item2.price;
})
console.table(products);
