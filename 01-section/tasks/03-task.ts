const city = "London";
const country = "Great Britain";
const region = 161;

// 1. Сравните типы переменных city и country,
// результат сравнения запишите в переменную
// isSameTypes
// 2. Приведите тип переменной region таким
// образом, чтобы результат сравнения типов
// переменных city и region был равен true,
// запишите результат сравнения в переменную
// isSameTypes

let isSameTypes:boolean;
function SameTypesOne(){
    if (typeof city === typeof country){
    isSameTypes = true;
    } else {
    isSameTypes = false;
    }
    console.log(isSameTypes);
}
SameTypesOne();
let region1 = String(region);
function SameTypesTwo(){
    if (typeof city === typeof region1){
     isSameTypes = true;
}
else {
 isSameTypes = false;
}
    console.log(isSameTypes);
}
SameTypesTwo();