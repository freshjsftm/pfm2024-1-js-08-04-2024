let number1 = 1;
let number2 = 5;
const elem = null;
const condition = true;
const str1 = ' '; //32
const str2 = '!'; //33
const str3 = ''; // '' !== ''
// false 0 '' NaN null undefined

//             false            true         !
const check = str3 !== '' && condition && str2 ;
console.log('check = ', check);//!

//const check = !str3 && !elem && number1===number2;
//1 !str3 = !'' = !false = true
//2 !elem = !null = !false = true
//3 number1===number2 = false
//4 !false = true

//console.log('check = ', check);

// const check = undefined ?? (number1 || elem) ;
// number1 || elem  => 1 || null => 1
// undefined ?? 1 => 1

//const check = !elem || !condition && !number1;
//1 !elem => !null => !false => true
//2 !condition => !true => false
//3 !number1 => !true => false
//4 false && false => false
//5 true || false => true
//console.log('check = ', check);

//const result = number1 < number2 && (elem || condition);
//1 number1 < number2 = false
//2 elem || condition = true
//3 false && true = false

const number3 = 6;
// check diapason
const result = number1 <= number3 && number3 <= number2;
// 1 number1 < number = true
// 2 number3 < number2 = false
// 3 true && false = false

//так не можна!!!
//number1 < number3 < number2 => true<5 => 1<5 => true
//console.log('result = ', result);
