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