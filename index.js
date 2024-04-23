// пропонуємо розв'язати приклад з множення з двома випадковими числами від [0-10] до тих пір поки юзер не наведе правильну відповідь

//вивести в промпті приклад множення з двома випадковими числами від [0-10]
//відловити помилки '' null string wrong answer
//якщо правильно - похвалити

function getRandomIntInclusive(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function isErrorUserInputNumber(value) {
  return value === '' || value === null || Number.isNaN(Number(value));
}

const MAX_AMOUNT = 300;
for (let i = 0; i < MAX_AMOUNT; i++) {
  const randomNumber1 = getRandomIntInclusive();
  const randomNumber2 = getRandomIntInclusive();
  const rightResult = randomNumber1 * randomNumber2;
  const strTask = `Обчисліть вираз і введіть результат
${randomNumber1} * ${randomNumber2} = `;

  while (true) {
    const userResult = prompt(strTask);
    if (isErrorUserInputNumber(userResult)) {
      continue;
    }
    if (rightResult === Number(userResult)) {
      alert('win');
      break;
    }
  }
}
