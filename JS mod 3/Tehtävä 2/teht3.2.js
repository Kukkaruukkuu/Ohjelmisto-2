//Kirjoita ohjelma, joka kysyy käyttäjältä osallistujien lukumäärän. 
//Tämän jälkeen ohjelma kysyy kaikkien osallistujien nimet. 
//Lopuksi ohjelma tulostaa osallistujien nimet verkkosivulle numeroituna luettelona (<ol>) aakkosjärjestyksessä. (2p)

"use strict";

let lukumääräStr =prompt("Anna osallistujien lukumäärä:");
let lukumäärä = Number(lukumääräStr);
let nimet = [];

for (let i = 0; i < lukumäärä; i++) {
    let nimi = prompt(`Anna osallistujan ${i + 1} nimi:`);
    nimet.push(nimi);
}
        
nimet.sort((a, b) => a.localeCompare(b, 'fi'));

let ol = document.getElementById("lista");

for (let i = 0; i < nimet.length; i++){
let li = document.createElement("li");
li.textContent = nimet[i];
ol.appendChild(li);
}