const seasonsTimes = (num) => {
  num = Number(prompt("Введите число месяца"));
  if (num == 1 || num == 2 || num == 12) {
    console.log("Зима");
  } else if (num > 2 && num < 6) {
    console.log("Весна");
  } else if (num > 6 && num < 9) {
    console.log("Лето");
  } else if (num == 9 || num == 10 || num == 11) {
    console.log("Осень");
  } else if (isNaN(num)) {
    console.log("Переданный параметр не является числом");
  } else {
    console.log("Такого месяца не существует");
  }
};

let stringArray = [
  "Яблоко",
  "Груша",
  "Дыня",
  "Виноград",
  "Персик",
  "Апельсин",
  "Мандарин",
];

function getMyGame() {
  stringArray = stringArray.sort(() => Math.random() - 0.5);
  alert(stringArray);
  stringArray.join("");
  const firstElem = stringArray[0];
  const lastElem = stringArray[stringArray.length - 1];

  const firstQuestion = prompt("Чему равнялся первый элемент массива?");
  const secondQuestion = prompt("Чему равнялся последний элемент массива?");
  if (
    firstElem.toLowerCase() === firstQuestion.toLowerCase() &&
    lastElem.toLowerCase() === secondQuestion.toLowerCase()
  ) {
    alert("Гриффиндор");
  } else if (
    firstElem.toLowerCase() === firstQuestion.toLowerCase() ||
    lastElem.toLowerCase() === secondQuestion.toLowerCase()
  ) {
    alert("Было близко");
  } else {
    alert("Слизерин");
  }
}
