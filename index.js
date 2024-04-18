let check;
const value1 = 48;
const value2 = 45;
debugger;
if (typeof value1 === typeof value2 && value1 > value2) {
  check = value1;
} else if (typeof value1 === typeof value2 && value2 > value1) {
  check = value2;
} else {
  check = null;
}
////

if (typeof value1 === typeof value2) {
  if (value1 > value2) {
    check = value1;
  } else if (value2 > value1) {
    check = value2;
  } else {
    check = null;
  }
} else {
  check = null;
}
