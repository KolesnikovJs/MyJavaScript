'use strict'
let money = +prompt('Ваш месячный доход?');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 100000;
let period = 6;
let budgetDay = money / 30;



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

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(typeof income.length);





let expenses1 = confirm('Введите обязательную статью расходов?');
let expenses2 = confirm('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1;
console.log(budgetMonth);
console.log(Math.round(mission / budgetMonth));
budgetDay = budgetMonth / 30;
 console.log(Math.floor(budgetDay));


let getStatusIncome = function() {
    if(budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if(budgetDay > 600) {
        return ('У вас средний уровень дохода');
    } else if(budgetDay > 0) {
        return ('К сожалению у вас низкий уровень дохода');
    } else {
        return ('Что-то пошло не так');
        
    }
};

console.log(getStatusIncome());

















