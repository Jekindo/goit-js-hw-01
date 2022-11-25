// 1. Вары
const ADMIN_PASSWORD = 'qweqwe';
let message;

// 2. Ввести prompt "Пароль"
const userInput = prompt('Давай пароль...');

// 3. Условные конструкции в зависимости от введенного пароля
// if (userInput === null) {
//     message = 'Отменено пользователем!';
// } else if (userInput === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

switch (userInput) {
    case null:
        message = 'Отменено пользователем!';
        break;
    case ADMIN_PASSWORD:
        message = 'Добро пожаловать!';
        break;
    default:
        message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
