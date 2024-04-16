// написати функцію, яка приймає число - сторону квадрата (значення за замовчуванням = 1) і повертає периметр
//перевірити зі значеннями -5 0 1.3 8

/**
 * функцію, яка приймає число - сторону квадрата (значення за замовчуванням = 1) і повертає периметр
 * @param {number} side defaultValue = 1
 * @returns {number} for side <=0 return NaN
 */
const getPerimetrSquare = function (side = 1) {
  //перевірити сторону щоб вона була більше 0
  //якщо че так - обчислити периметр і повернути
  //якщо ні - повернути NaN
  if (side > 0) {
    return 4 * side;
  }
  return NaN;
};

const userInput = -7;
const perimetr = getPerimetrSquare(userInput); //NaN
if (Number.isNaN(perimetr)) {
  console.log('error, return');
} else {
  //додаткові обчислення
  console.log('result = ', perimetr);
}
