// 1. Ниже приведен список переменных из
// первого урока. На их основе создайте
// интерфейс IUser.
interface IUser
{Name:string ;
    Lastname:string ;
    Sex:string ;
    City:string;
    Postal_code:number;
    Status:boolean;
    Pet:boolean;
    hasCar?: boolean;
}
let person:IUser
{
    let Name = 'valeria';
    let Lastname = 'Maslova';
    let Sex ='female';
    let City='Rostov';
    let Postal_code=1312312;
    let Status=false;
    let Pet=true;


}
// 2. Не меняя написанный вами интерфейс
// IUser, добавьте в него опциональную
// переменную hasCar

// 3. Создайте новый интерфейс ICustomer,
// поля которого будут наследоваться от IUser.
// ICustomer также должен содержать поля с
// количеством заказов, а также со способом оплаты
// (cash, card или credit)
interface ICustomer extends IUser {
    ordersCount: number;
    paymentMethod: 'cash' | 'card' | 'credit';
}
