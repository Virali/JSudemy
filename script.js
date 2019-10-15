'use strict';

var money= parseInt(prompt("Ваш бюджет на месяц?"));
var time= prompt("Введите дату в формате YYYY-MM-DD");

var Expances = {
    itemlist : new String(),
    price : new Number()
}
Expances.itemlist = prompt("Введите обязательную статью расходов в этом месяце");
Expances.price =parseInt(prompt("Во сколько обойдется?", ""));

var appData = {budget: money, timedata: time, expences: Expances,
    optionalExpenses: '', income: "", savings: false};

alert(money/30);