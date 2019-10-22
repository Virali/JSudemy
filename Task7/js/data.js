'use strict';

let startb = document.getElementById("start"),
    valueItems = [],
    expensesItems = document.getElementsByClassName("expenses-item"),
    expencesBtn = document.getElementsByTagName("button")[0],
    optExpencesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optExpencesItems = document.querySelectorAll(".optionalexpenses-item"),
    income = document.querySelector(".choose-income"),
    checksavingsbox = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

for(let i = 0; i < document.getElementsByClassName("result-table")[0].children.length; i++) {
    if( (i % 2) != 0) valueItems.push(document.getElementsByClassName("result-table")[0].children[i]);
}