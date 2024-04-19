// continue

const min = 10;
const max = 30;
const devisor = 7;

// вивести числа з діапазона які кратні devisor

//в зворотньому порядку
for (let number = max; number >= min; number--) {
  if (number % devisor) {
    continue;
  }
  console.log(number);
}

for (let number = min; number <= max; number++) {
  if (number % devisor) {
    continue;
  }
  console.log(number);
}

let number = min;
while(number <= max){
   if (number % devisor) {
    number++;
    continue;
  }
  console.log(number); 
  number++;
}
