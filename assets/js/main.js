let first = +prompt("Введите первое число: ");
let second = +prompt("Введите второе число: ");

if (first === second) {
    alert("Покупка совершена");
} else if (first > second) {
    alert(`Для покупки не хватает: ${first - second}р.`);
} else {
    alert(`Покупка совершена! Ваша сдача ${second - first}p.`);
}