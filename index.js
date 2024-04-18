//тернарний
// умова ? правдивий варіант : неправдивий варіант;
//false 0 '' null undefined

const summa =3456;
//bad practice
const sale = summa > 100000 ? 10 : 
              summa > 10000 ? 5 : 
                summa > 1000 ? 2 : 0;
     
//good practice
let sale2=0;
if( summa > 100000){
  sale2 = 10;
} else if( summa > 10000){
  sale2 = 5;
} else if( summa > 1000){
  sale2 = 2;
}