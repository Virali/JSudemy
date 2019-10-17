'use strict';

var money= parseInt(prompt("Ваш бюджет на месяц?"));
var time= prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money, 
    timedata: time, 
    expences: {},
    optionalExpenses: {}, 
    income: [], 
    savings: false
};

let a1= prompt("Введите обязательную статью расходов вэтом месяце"),
    a2 = prompt("Во сколько обойдётся?"),
    a3 = prompt("Введите обязательную статью расходов вэтом месяце"),
    a4 = prompt("Во сколько обойдётся?");

appData.expences.a1 = a2;
appData.expences.a3 = a4;

alert(appData.budget/30);