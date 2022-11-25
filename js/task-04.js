// 1. Вары
let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

// 2. При посещении страницы - prompt
const amountOfDroids = Number(
    prompt('Количество дроидов, которые Вы хотите купить:'),
);


// 3. Проверить что ввел пользователь
if (amountOfDroids === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = pricePerDroid * amountOfDroids;
    console.log(
        `Итого к оплате ${totalPrice}, проверяем количество денег на счету...`,
    );

    // 4. Проверить сможет ли пользователь оплатить заказ
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
		credits -= totalPrice;
        console.log(
            `Вы купили ${amountOfDroids} дроидов, на счету осталось ${credits} кредитов.`,
        );
    }
}
