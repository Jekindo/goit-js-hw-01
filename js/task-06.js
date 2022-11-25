let input;
let total = 0;

while (input !== null) {
    input = prompt('Вводи число, придурок...');
    let inputNumber = Number(input);
    if (!isNaN(inputNumber)) {
        total += inputNumber;
    } else {
        alert('ЧИСЛО ДАВАЙ, ДЕЦИК');
    }
}

alert(`Общая сумма чисел равна ${total}`);
