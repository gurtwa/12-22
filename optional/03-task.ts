function resistorValue(colors: [string, string]): number {
    const colorMap: { [key: string]: number } = {
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
    const firstDigit = colorMap[colors[0].toLowerCase()];
    const secondDigit = colorMap[colors[1].toLowerCase()];
    return firstDigit * 10 + secondDigit;
}
