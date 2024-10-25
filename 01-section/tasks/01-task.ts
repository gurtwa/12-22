// 1. Создайте несколько переменных:
// Имя, Фамилия, Пол, Возраст, Родной город,
// Почтовый индекс,Семейное положение
// женат/замужем (да/нет), Есть ли домашние
// животные? (да/нет)
// 2. Явно определите тип переменных
// 3. Присвойте каждой переменной значение
// соответствующее лично вам
// 4. Выведите данные в консоль

let Name:string = 'valeria';
let Lastname:string = 'Maslova';
let Sex:string ='female';
let City:string='Rostov';
let Postal_code:number=1312312;
let Status:boolean=false;
let Pet:boolean=true;

function Myinfo(){
    let Iam:any=[Name,Lastname,Sex,City,Postal_code,Status,Pet];
    console.log = (Iam);
};
Myinfo();


