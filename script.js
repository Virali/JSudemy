'use strict';

let money, time;

function start() {
    money= +(prompt("Ваш бюджет на месяц?"));
    time= prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money= +(prompt("Ваш бюджет на месяц?"));
    }
}

start();

var appData = {
    budget: money, 
    timedata: time, 
    expences: {},
    optionalExpenses: {}, 
    income: [], 
    savings: true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++){
        let a= prompt("Введите обязательную статью расходов вэтом месяце"),
        b = prompt("Во сколько обойдётся?");
    
        if( (typeof(a)) === 'string' && (typeof(a) != null) && 
        (a != '') && typeof(b) != null && a.length < 50){
            console.log("done");
            appData.expences[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for(let i = 0; i < 3; i++){
        let a = prompt("Статья необязательных расходов?");

        appData.optionalExpenses[i] = a;
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();

    alert(appData.moneyPerDay);
}
//detectDayBudget();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12 * percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}

checkSavings();