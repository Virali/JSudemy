'use strict';

var money= +(prompt("Ваш бюджет на месяц?"));
var time= prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money, 
    timedata: time, 
    expences: {},
    optionalExpenses: {}, 
    income: [], 
    savings: false
};

for(let i = 0; i < 2; i++){
    let a= prompt("Введите обязательную статью расходов вэтом месяце"),
    b = prompt("Во сколько обойдётся?");

    if( (typeof(a)) === 'string' && (typeof(a) != null) && 
    (a != '') && typeof(b) != null && a.length < 50){
        appData.expences[a] = b;
    } else {

    }
}
/*
let i =0;
while(i<2){
    //code
    i++;
} */

/*
let i = 0;
do {
    //code
    i++;
} while(i<2); */

alert(appData.budget/30);