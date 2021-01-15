'use strict'
let money;
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let start = function() {
    money = prompt('Ваш месячный доход?');
    while (!isNumber(money)) {
        
        money = prompt('Ваш месячный доход?');
    }
};
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    budget: money,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses1: 0,
    expenses2: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');         
    },
    getStatusIncome: function() {
        if(appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if(appData.budgetDay > 600) {
            return ('У вас средний уровень дохода');
        } else if(appData.budgetDay > 0) {
            return ('К сожалению у вас низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
            
        }
    },
    getExpensesMonth: function() {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
    
            if (i === 0) {
                appData.expenses1 = confirm('Введите обязательную статью расходов?');
            } else if (i === 1) {
                appData.expenses2 = confirm('Введите обязательную статью расходов?');
            }
    
            sum += +prompt('Во сколько это обойдется?');
        }
       
        return sum;
    },
    accumulatedMonth: function  getAccumulatedMonth() {
        return money - expensesAmount
    },
    getTargetMonth: function() {
        return appData.mission / appData.accumulatedMonth;
    }
}

// let getStatusIncome = function() {
//     if(budgetDay > 1200) {
//         return ('У вас высокий уровень дохода');
//     } else if(budgetDay > 600) {
//         return ('У вас средний уровень дохода');
//     } else if(budgetDay > 0) {
//         return ('К сожалению у вас низкий уровень дохода');
//     } else {
//         return ('Что-то пошло не так');
        
//     }
// };

 console.log(appData.getStatusIncome());

// let expenses1, expenses2;

// let getExpensesMonth = function() {
//     let sum = 0;
//     for (let i = 0; i < 2; i++) {

//         if (i === 0) {
//             expenses1 = confirm('Введите обязательную статью расходов?');
//         } else if (i === 1) {
//             expenses2 = confirm('Введите обязательную статью расходов?');
//         }



//         sum += +prompt('Во сколько это обойдется?');
//     }
//     console.log(sum);
//     return sum;
// };

let expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц :', expensesAmount);

// let accumulatedMonth = function  getAccumulatedMonth() {
//     return money - expensesAmount
// };
 console.log('Накопления за месяц :', appData.accumulatedMonth());

// let getTargetMonth = function() {
//     return appData.mission / accumulatedMonth;
// };

console.log('Цель будет достигнута через :', appData.getTargetMonth());
