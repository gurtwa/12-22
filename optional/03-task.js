"use strict";
function resistorValue(colors) {
    // Сопоставляем цвета с их числовыми значениями
    const colorMap = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9,
    };
    // Получаем числовые значения двух цветов
    const firstDigit = colorMap[colors[0].toLowerCase()];
    const secondDigit = colorMap[colors[1].toLowerCase()];
    // Возвращаем результат как двухзначное число
    return firstDigit * 10 + secondDigit;
}
