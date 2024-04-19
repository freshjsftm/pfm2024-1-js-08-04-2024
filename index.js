//if  - складна умова
//switch -вибір з певних варіантів

//номер місяця - пору року
//winter -1,2,12  spring-3,4,5   summer - 6, 7, 8   autumn - 9,10,11

const monthUser = prompt('month'); // '' null  word
const month = Number(monthUser); //  0  0     NaN
//
if (
  month < 1 ||
  month > 12 ||
  Number.isNaN(month) ||
  Number.isInteger(month) === false
) {
  console.log('wrong data');
} else if (month <= 2 || month === 12) {
  //123456789 10 11 12
  console.log('winter');
} else if (month <= 5) {
  //3456789 10 11
  console.log('spring');
} else if (month <= 8) {
  //6789 10 11
  console.log('summer');
} else {
  //9 10 11
  console.log('autumn');
}

if (month === 1 || month === 2 || month === 12) {
  console.log('winter');
} else if (month === 3 || month === 4 || month === 5) {
  console.log('spring');
} else if (month === 6 || month === 7 || month === 8) {
  console.log('summer');
} else if (month === 9 || month === 10 || month === 11) {
  console.log('autumn');
} else {
  console.log('error');
}

switch (month) {
  case 1:
  case 2:
  case 12:
    console.log('winter');
    break;
  case 3:
  case 4:
  case 5:
    console.log('spring');
    break;
  case 6:
  case 7:
  case 8:
    console.log('summer');
    break;
  case 9:
  case 10:
  case 11:
    console.log('autumn');
    break;
  default:
    console.log('error');
    break;
}
