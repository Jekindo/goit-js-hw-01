// 1. Prompt -> привести к нижнему регистру
let country = prompt('Укажите страну');
country = country.toLowerCase();
let delivery;
let message;

// 2. switch
switch (country) {
    case 'китай':
        delivery = 100;
        message = `Доставка в Китай будет стоить ${delivery} кредитов`;
        break;
    case 'чили':
        delivery = 250;
        message = `Доставка в Чили будет стоить ${delivery} кредитов`;
        break;
    case 'австралия':
        delivery = 170;
        message = `Доставка в Австрию будет стоить ${delivery} кредитов`;
        break;
    case 'индия':
        delivery = 80;
        message = `Доставка в Индию будет стоить ${delivery} кредитов`;
        break;
    case 'ямайка':
        delivery = 120;
        message = `Доставка в Ямайку будет стоить ${delivery} кредитов`;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}

alert(message);
