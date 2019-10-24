'use strict';

let startBtn = document.getElementById("start"),
    // budgetValue = document.getElementsByClassName("budget-value")[0],
    // daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    // levelValue = document.getElementsByClassName("level-value")[0],
    // expencesValue = document.getElementsByClassName("expenses-value")[0],
    // optExpencesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    // incomeValue = document.getElementsByClassName("income-value")[0],
    // monthValue = document.getElementsByClassName("monthsavings-value")[0],
    // yearValue = document.getElementsByClassName("yearsavings-value")[0],
    valueItems = [],
    expensesItems = document.getElementsByClassName("expenses-item"),
    expencesBtn = document.getElementsByTagName("button")[0],
    optExpencesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optExpencesItems = document.querySelectorAll(".optionalexpenses-item"),
    income = document.querySelector(".choose-income"),
    checksavingsbox = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

for(let i = 0; i < document.getElementsByClassName("result-table")[0].children.length; i++) {
    if( (i % 2) != 0) valueItems.push(document.getElementsByClassName("result-table")[0].children[i]);
}
expencesBtn.disabled = true;
optExpencesBtn.disabled = true;
countBudgetBtn.disabled = true;

let money, time;

startBtn.addEventListener('click', function() {
    expencesBtn.disabled = false;
    optExpencesBtn.disabled = false;
    countBudgetBtn.disabled = false;    

    time= prompt("Введите дату в формате YYYY-MM-DD");
    money= +(prompt("Ваш бюджет на месяц?"));

    while(isNaN(money) || money == "" || money == null) {
        money= +(prompt("Ваш бюджет на месяц?"));
    }
    appData.budget = money;
    appData.timedata = time;
    valueItems[0].textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

expencesBtn.addEventListener('click', function() {
    let sum = 0;

    for(let i = 0; i < expensesItems.length; i++){
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
    
        if( (typeof(a)) === 'string' && (typeof(a) != null) && 
        (a != '') && typeof(b) != null && a.length < 50){
            console.log("done");
            appData.expences[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    valueItems[3].textContent = sum;
    appData.totalLost = sum;
});

optExpencesBtn.addEventListener('click', function() {
    for(let i = 0; i < optExpencesItems.length; i++){
        let opt = optExpencesItems[i].value;
        appData.optionalExpenses[i] = opt;
        valueItems[4].textContent += appData.optionalExpenses[i] + ' ';
    }
});

checksavingsbox.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

countBudgetBtn.addEventListener('click', function() {
    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget-appData.totalLost)/30).toFixed();
        valueItems[1].textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) 
        valueItems[2].textContent = "Минимальный уровень достатка";
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) 
        valueItems[2].textContent = "Средний уровень достатка";
        else if (appData.moneyPerDay > 2000) 
        valueItems[2].textContent = "Высокий уровень достатка";
        else 
        valueItems[2].textContent = "Произошла ошибка";
    } 
    else {
        valueItems[2].textContent = "Произошла ошибка";
    }
});

income.addEventListener('change', function(){
    let items = income.value;
    appData.income = items.split(', ');
    valueItems[5].textContent = appData.income;
});

sumValue.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100 * percent;

        valueItems[6].textContent = appData.monthIncome.toFixed(1);
        valueItems[7].textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100 * percent;

        valueItems[6].textContent = appData.monthIncome.toFixed(1);
        valueItems[7].textContent = appData.yearIncome.toFixed(1);
    }
});

var appData = {
    budget: money, 
    timedata: time, 
    expences: {},
    totalLost: 0,
    optionalExpenses: {}, 
    income: [], 
    savings: false
};