const arrNums1 = [1, 5, 2, 4, 6];

//filter

const newArrNums1 = arrNums1.filter(function (elem) {
  return elem > 3;
});
console.log(arrNums1);
console.log(newArrNums1);

const users = [
  {id:100, login:'qwe1', isMale: true},
  {id:200, login:'qwe21', isMale: true},
  {id:101, login:'asd', isMale: false},
  {id:178, login:'sss', isMale: false},
  {id:10, login:'max', isMale: true},
]

//зібрати в новий масив усіх жінок
const usersWomen = users.filter(function(user){
  return user.isMale === false;
  //return !user.isMale;
})
console.table(usersWomen);

users.forEach(function(user){
  user.isSubscribe = Math.random()>0.5
})
console.table(users);

const usersWithSubscribe = users.filter(function(user){
  return user.isSubscribe;
})
console.table(usersWithSubscribe);