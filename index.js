
const arrNums1 = [4,9,2,3,6,7];

// for (let index = 0; index < arrNums1.length; index++) {
//   const element = arrNums1[index];
//   if(element%2){
//     console.log(element);
//   }
// }

// for (let i = 0; i < arrNums1.length; i++) {
//   console.log(arrNums1[i]**2);  
// }

// arrNums1.forEach(console.log)
// arrNums1.forEach(alert)

function logOdd(element){
  if(element%2){
    console.log(element);
  }
  return; //undefined
}
// debugger
arrNums1.forEach(logOdd);

function logPow2(element){
    console.log(element ** 2);
}

arrNums1.forEach(function (elem){console.log(elem**2)})

logPow2(11)
console.log('--------------');
myArrNums1.forEach(logPow2);