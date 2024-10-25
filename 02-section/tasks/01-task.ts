// 1. Создайте 3 массива: массив из имен 3 ваших
// лучших друзей, массив из их возрастов, массив
// в котором будет указано есть ли у них автомобиль
// 2. Укажите в явной тип массивов
// 3. Заполните данные

const friends: string[] = ['Bob','Alice','Rob'];
const ages:number[] = [21,22,23];
const hasCar:string[] = ['toyota', 'toyota' , 'toyota'];

// 4. Добавьте в каждый из массивов информацию
// о вашем четвертом друге
friends.push('Dan');
ages.push(24);
hasCar.push(`toyota`);

// 5.  исправьте строки ниже не возникало ошибок

friends.push("Ваня");
ages.push(Number('22'));

hasCar.push('toyota');

// 6. Создайте кортеж массивов, перенесите данные о ваших друзьях в него

const friendsData: [string[], number[], string[]] = [friends, ages, hasCar];