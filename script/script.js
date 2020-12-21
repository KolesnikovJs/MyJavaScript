'use strict'
let money = prompt('Ваш месячный доход?');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 100000;
let period = 6;
let budgetDay = money / 30;



alert('hello world!');


console.log(money);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен' + ' ' + period + ' ' + 'месяцев');
console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('Бюджет на день:' + budgetDay);



let expenses1 = confirm('Введите обязательную статью расходов?');
let expenses2 = confirm('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1;
console.log(budgetMonth);
console.log(Math.round(mission / budgetMonth));
budgetDay = budgetMonth / 30;
 console.log(Math.floor(budgetDay));


if(budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if(budgetDay > 600) {
    console.log('У вас средний уровень дохода');
} else if(budgetDay > 0) {
    console.log('К сожалению у вас низкий уровень дохода');
} else {
    console.log('Что-то пошло не так');
    
}
















