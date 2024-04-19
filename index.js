const lang = prompt(
  'enter lang:\n1 - pl - poland\n2 - ua - ukraine\n3 - pt - portugues'
);
// debugger
// if (lang === 'pl' || lang === '1' || lang === 'poland') {
//   console.log('dzen dobruy');
// } else if (lang === 'ua' || lang === '2' || lang === 'ukraine') {.
//   console.log('привіт');
// } else if (lang === 'pt'  || lang === '3' || lang === 'portugues') {
//   console.log('ola');
// } else {
//   console.log('hello');
// }


switch (lang) {
  case 'pl':
  case '1':
  case 'poland':
    console.log('dzen dobruy');
    break;
  case 'ua':
  case '2':
  case 'ukraine':
    console.log('привіт');
    break;
  case 'pt':
  case '3':
  case 'portugues':
    console.log('ola');
    break;
  default:
    console.log('hello');
    break;
}


