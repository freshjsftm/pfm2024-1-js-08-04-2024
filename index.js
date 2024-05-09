'use strict';

function MyObj(prop) {
  if (!new.target) {
    return new MyObj(prop);
  }
  this.prop = prop;
}

const obj1 = MyObj(78);
console.log(obj1);

const obj = Object();
