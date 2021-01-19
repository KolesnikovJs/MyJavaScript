'use strict'

let start = document.querySelector('#start');
let btnPlus = document.getElementsByTagName('button');
let incomePluse = btnPlus[0];
let expensesPlus = btnPlus[1];
let additionalIncomeItem = document.querySelectorAll('additional_income-item');
let depositChek = document.querySelector('#deposit-check');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpenses = document.querySelector('.additional_expenses');
let periodSelect = document.querySelector('.period-select');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let incomeItem = document.querySelectorAll('.income-items');




let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    incomeMonth: 0,
    persentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses1: 0,
    expenses2: 0,
    start: function() {
        
        if(salaryAmount.value === '') {
            alert('Ошибка, поле Месячный доход должно быть заполнено!');
            return;
        }
        appData.budget = +salaryAmount.value;
    

        appData.getExpenses();
        
        
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
    
    },

    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());  
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses; 
            }
        });
    },
    getIncome: function() {
        if(confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            appData.income[itemIncome] = cashIncome;
        }

        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },  
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if(item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },

    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        return targetAmount.value / appData.budgetMonth;
    },
    getStatusIncome: function() {
        if (appData.budgetDay > 800) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetday > 300) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('К сожалению у вас низкий уровень дохода');
        } else {
            return ('Что-то пошло не так')
        }
    },
    getInfoDeposit: function() {
        if(appData.deposit) {
            appData.persentDeposit = prompt('Какой годовой процент?', '10');
            appData.moneyDeposit = prompt('Какаясумма заложена?', '10000');
        }
    },
    calcPeriod: function() {
        return appData.budgetMonth * periodSelect.value;
    }

};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);





if (appData.getTargetMonth() > 0) {
    console.log("Цель будет достигнута за  " + Math.ceil(appData.getTargetMonth()) + 
   ' месяца' );   
} else {
    console.log('Цель не будет достигнута');
}



for (let key in appData) {
    //console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
    
}

 
