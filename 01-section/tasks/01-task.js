"use strict";
// 1. Создайте несколько переменных:
// Имя, Фамилия, Пол, Возраст, Родной город,
// Почтовый индекс,Семейное положение
// женат/замужем (да/нет), Есть ли домашние
// животные? (да/нет)
// 2. Явно определите тип переменных
// 3. Присвойте каждой переменной значение
// соответствующее лично вам
// 4. Выведите данные в консоль
let Name = 'valeria';
let Lastname = 'Maslova';
let Sex = 'female';
let City = 'Rostov';
let Postal_code = 1312312;
let Status = false;
let Pet = true;
function Myinfo() {
    let Iam = [Name, Lastname, Sex, City, Postal_code, Status, Pet];
    console.log = (Iam);
}
;
Myinfo();
