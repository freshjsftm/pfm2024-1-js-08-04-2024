'use strict';

const strObj = new String('word');
console.log(strObj);
console.log(strObj.valueOf());

console.log(String.fromCharCode(195));
console.log(String.fromCodePoint(9777));

let str1 = 'Cat' + '!C';
console.log(str1.length);
console.log(typeof str1);

//toUpperCase toLowerCase
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//str1[0] = 'R'; //неможливо!!!!

console.log(str1[0]); //imperative bad practice
console.log(str1.at(-1)); //declarative good practice
console.log(str1.charAt(1)); //declarative good practice
console.log(str1.charCodeAt(1));

console.log(str1.padStart(25, '.'));
console.log(str1.repeat(7));
console.log(str1.replace('C', 'R'));

//str1 = str1.replaceAll('C','R');
console.log(str1);
console.log(str1.split('!'));
console.log(str1.split(''));

console.log(str1.slice(3, 1));
console.log(str1.substring(3, 1));
console.log(str1.substring(1, 3));

let str2 = '      q       we        ';
console.log(str2);
console.log(str2.trim());
console.log(str2);
