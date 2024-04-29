
const users = [
  {id:100, login:'qwe1', isMale: true},
  {id:200, login:'qwe21', isMale: true},
  {id:101, login:'asd', isMale: false},
  {id:178, login:'sss', isMale: false},
  {id:10, login:'max', isMale: true},
]

users.forEach(function(user){
  user.isSubscribe = true;
  user.wishList = [];
})

console.table(users)