//Kirjoita ohjelma, joka kysyy kuuden koiran nimet. 
//Ohjelma tulostaa koirien nimet järjestämättömään luetteloon (<ul>) käänteisessä aakkosjärjestyksessä. (2p)

"use strict";

let koirat = [];

for (let i = 0; i < 6; i++) {
    let nimi = prompt(`Anna koiran ${i + 1} nimi:`);
    koirat.push(nimi);
}

koirat.sort((a, b) => b.localeCompare(a, 'fi'));

let ul = document.getElementById("koiralista");

for (let i = 0; i < koirat.length; i++) {
    let li = document.createElement("li");
    li.textContent = koirat[i];
    ul.appendChild(li);
    }