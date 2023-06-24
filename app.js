let first = +prompt("Task1. Введіть перше число");
let second = +prompt("Введіть друге число");
function FoS(a, b) {
  if (first > second) return first;
  else return second;
}
alert("Task1. Найбільше з двох чисел є " + FoS(first, second));
/*____________________________________________________________________________-*/
let year = +prompt("Task2. Введіть рік народження:");
function calcAge(a, b = 2023) {
  return +b - +a;
}
alert("Task2. Ваш вік - " + calcAge(year));
/*----------------------------------------------------------------------------*/
let Name = prompt("Task3. Введіть Ваше імя: ");
let year1 = +prompt("Task3. Введіть рік народження: ");

function yearUntilPens(a, b, c = 2023) {
  let d = +c - +a;
  if (+d >= 60) return "Пан " + b + " вже на пенсії";
  else return "Пан " + b + " вийде на песіон через " + (60 - +d) + " років";
}
alert(yearUntilPens(year1, Name));
