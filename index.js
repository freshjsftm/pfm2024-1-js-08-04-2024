const numberFromDB = 4;
const numberFromUser = '11';
const conversionNumberFromUser =  Number(numberFromUser);
const result = numberFromDB +  conversionNumberFromUser;
console.log('result =', result);
console.log('typeof result =', typeof result);
console.log('typeof conversionNumberFromUser =', typeof conversionNumberFromUser);

const isActiveUser = false;
const result2 = numberFromDB + Number(isActiveUser);
console.log('result =', result2);
console.log('typeof result =', typeof result2);

const userFirstName = 'Bred';
const userLastName = 'Pitt';
const userFullName = userFirstName + ' ' + userLastName;
console.log('userFullName =', userFullName);
