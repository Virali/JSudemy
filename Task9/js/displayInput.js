'use strict';

//<input id="age" value="30">

let age = document.getElementById('age');

function showUser(surname, name) {
    console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age, 'Иммануил', 'Клика');

// showUser();