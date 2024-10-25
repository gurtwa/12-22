// 1. Типизируйте функцию calc

function calc(action:string, a:number, b:number): number {
  switch (action) {
    case "summa":
      return a + b;
    case "subtraction":
      return a - b;
    case "multiplication":
      return a * b;
    case "division":
      if (b === 0) return 0;
      return a / b;
    default:
      return a + b;
  }
}

// 2. Напишите функцию calc2. Данная функция
// должна быть аналогична функции calc,
// но с использованием enum для action
enum Action {
  Summa = "summa",
  Subtraction = "subtraction",
  Multiplication = "multiplication",
  Division = "division",
  Modulus = "modulus" // Добавляем новое действие
}

function calc2(action: Action, a: number, b: number): number {
  switch (action) {
    case Action.Summa:
      return a + b;
    case Action.Subtraction:
      return a - b;
    case Action.Multiplication:
      return a * b;
    case Action.Division:
      if (b === 0) return 0;
      return a / b;
    case Action.Modulus:  // Добавляем обработку нового действия
      return a % b;
    default:
      return a + b;
  }
}
