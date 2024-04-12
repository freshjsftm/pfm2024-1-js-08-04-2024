//AND  &&  multiple
/*
true  && true  = true
false && true  = false
true  && false = false
false && false = false
*/
//повертає останню правду або першу неправду
const resultAND = NaN && null && 'qwe';
console.log(resultAND);
//OR  ||  add
/*
true  || true  = true
false || true  = true
true  || false = true
false || false = false
*/
//повертає останню неправду або першу правду
const resultOR = 0 || undefined || 2;
console.log(resultOR);
/*
false  0   ''  NaN  undefined  null
*/

//Nullish coalescing operator  ??

//undefined  null

let termin;
let data;
console.log(10 ?? Infinity);
console.log(termin ?? Infinity);
console.log(data ?? 'данні за замовчуванням');