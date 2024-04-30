'use strict'; 
// debugger

//declaration
function test1(){
  console.log('test1', this)
}
test1()
//expression
const test2 = function(){
  console.log('test2', this)
}
test2()

//arrow
const test3 = ()=>{
  console.log('test3', this)
}
test3()
