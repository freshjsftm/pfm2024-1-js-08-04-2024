'use strict';

const dataBDUser = '12/03/2000';

const arrDataBDUser = dataBDUser.split('/');

const yearBDUser = arrDataBDUser.at(-1);
console.log(yearBDUser);

//Date
//мітка Юнікс = 1970-01-01

const now = new Date();
const currentYear = now.getFullYear();
console.log(currentYear);
console.dir(now);

//порахувати вік
const age = currentYear - Number(yearBDUser);
console.dir(age);
