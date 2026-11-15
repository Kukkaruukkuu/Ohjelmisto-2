"use strict"

const names = ['John', 'Paul', 'Jones'];

const elementti = document.querySelector('#target');

let x = "";

for (let i = 0; i < names.length; i++) {
    x += `<li>${names[i]}</li>`;
}

elementti.innerHTML = x;