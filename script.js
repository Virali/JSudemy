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
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++){
            let a= prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдётся?");
        
            if( (typeof(a)) === 'string' && (typeof(a) != null) && 
            (a != '') && typeof(b) != null && a.length < 50){
                console.log("done");
                appData.expences[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) console.log("Минимальный уровень достатка")
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) 
        console.log("Средний уровень достатка")
        else if (appData.moneyPerDay > 2000) console.log("Высокий уровень достатка")
        else console.log("Произошла ошибка");
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++){
            let a = prompt("Статья необязательных расходов?");
    
            appData.optionalExpenses[i] = a;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход? (Перечислить через запятую)", '');
        if( (typeof(items)) === 'string' && (typeof(items) != null) && 
        (items != '') ) {
            appData.income = items.split(', ');
            appData.income.sort();
            appData.income.forEach(function(item, i) {
                alert("Способы доп. заработка: " + (i+1) + ": " + item);
            });
        } else {
            appData.chooseIncome();
        }
    },
    showData: function() {
        for( let prop in appData) alert("Наша программа включает в себя данные:" + prop);
    }
};
appData.showData();