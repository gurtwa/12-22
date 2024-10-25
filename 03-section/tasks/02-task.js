"use strict";
// 1. Функция formattedUserData принимает ряд
// аргументов и выводит форматированную
// информацию о пользователе. Опишите
// аргументы этой функции таким образом,
// чтобы в случае отсутствия информации
// о возрасте или родном городе, в
// информации о юзере было указано
// "Нет данных"
function formattedUserData(firstName, lastName, age, hometown) {
    return `
    Имя: ${firstName};
    Фамилия: ${lastName};
    Возраст: ${age != null ? age : "Нет данных"};
    Родной город: ${hometown != null ? hometown : "Нет данных"};
  `;
}
// 2. Ниже перепишите функцию formattedUserData2 таким
// образом чтобы данные выводились в консоль
function formattedUserData2(firstName, lastName, age, hometown) {
    console.log(formattedUserData(firstName, lastName, age, hometown));
}
formattedUserData2("Иван", "Иванов", 25, "Москва");
