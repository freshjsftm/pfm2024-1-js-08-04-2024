const symbol1 = Symbol('description our symbol');
const symbol2 = Symbol('опис для чого потрібен символ');

const object1 = {
  prop: 12,
  45: 45,
  [symbol1]: 'value',
  [symbol2]: function(){}
};

object1[symbol1]  = '!!!!!';

export default object1;

/*
class MyObj{
  constructor(){
    this[symbol1] = 1;
  }
  [symbol2](){}
}



*/
