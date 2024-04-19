// loop
// передумова і післяумова
let count = 10;
const MAX_VALUE = 3;
// передумова
while (count < MAX_VALUE) {
  count++;
  console.log(count);
}
//післяумова
count = 10;
do {
  count++;
  console.log(count);
} while (count < MAX_VALUE);
//післяумова
count = 10;
while (true) {
  count++;
  console.log(count);
  if (count >= MAX_VALUE) break;
}


