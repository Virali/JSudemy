'use strict';

let menuitems = document.getElementsByClassName("menu-item"),
    menu = document.querySelector('.menu'),
    temp = menuitems[1];

menu.replaceChild(menuitems[2], menuitems[1]);
menu.insertBefore(temp, menuitems[2]);

let five = document.createElement('li');

five.classList.add('menu-item');
five.innerHTML = "Пятый пункт";
menu.appendChild(five);

let body = document.querySelector("body");

body.style.backgroundImage = "url('http://127.0.0.1:5500/Task6/img/apple_true.jpg')";

let title = document.getElementById("title"),
    columns = document.getElementsByClassName("column"),
    adv = document.querySelector(".adv");

title.textContent = "Мы продаем только подлинную технику Apple";
columns[1].removeChild(adv);

let boxinput = document.getElementById("prompt");

boxinput.textContent = prompt("Как вы относитесь к продукции Apple?", "");

console.log(columns);