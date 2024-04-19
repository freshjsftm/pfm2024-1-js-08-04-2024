const VALID_PASSWORD = 'qwerty';
const MAX_AMOUNT_TRY = 2;

// запитувати в користувача пароль до тих пір, доки не введе вірний
while (true) {
  const userInputPassword = prompt('Enter password');
  if (userInputPassword === VALID_PASSWORD) {
    console.log('welcome');
    break;
  }
}
//bad practice
for (let i = 0; i < MAX_AMOUNT_TRY; i++) {
  const userInputPassword = prompt('Enter password');
  if (userInputPassword === VALID_PASSWORD) {
    console.log('welcome');
    break;
  }
}

// запитувати в користувача пароль до тих пір, доки не введе вірний, але обмежити спроби кількістю 3 рази
// let countTry = 0;
// while (true) {
//   const userInputPassword = prompt('Enter password');
//   ++countTry;
//   if(userInputPassword === VALID_PASSWORD) {
//     console.log('welcome');
//     break;
//   }
//   if(countTry >= MAX_AMOUNT_TRY){
//     console.log('sorry');
//     break;
//   }
// }

// let countTry = 0;
// while (countTry < MAX_AMOUNT_TRY) {
//   const userInputPassword = prompt('Enter password');
//   countTry++;
//   if (userInputPassword === VALID_PASSWORD) {
//     console.log('welcome');
//     break;
//   }
//   if (countTry === MAX_AMOUNT_TRY) {
//     console.log('sorry');
//   }
// }

// for (let tryCount = 0; tryCount < MAX_AMOUNT_TRY; tryCount++) {
//   const userInputPassword = prompt('Enter password');
//   if (userInputPassword === VALID_PASSWORD) {
//     console.log('welcome');
//     break;
//   }
//   if (tryCount === MAX_AMOUNT_TRY - 1) {
//     console.log('sorry');
//   }
// }
