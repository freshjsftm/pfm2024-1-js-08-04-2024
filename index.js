//тернарний
// умова ? правдивий варіант : неправдивий варіант;

//написати функцію яка перевіряє на повноліття використовуючи тернарник
//функція приймає вік людини(число) і повертає рядок!!! 'adult'  'not adult'

/**
 *
 * @param {number} age
 * @returns {string}
 */
function getStatusAdultUser(age) {
  // if (age >= 18) {
  //   return 'adult';
  // }
  // return 'not adult';
  return age >= 18 ? 'adult' : 'not adult';
}

