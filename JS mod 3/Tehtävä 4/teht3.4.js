//Kirjoita ohjelma, joka kysyy käyttäjältä lukuja, kunnes käyttäjä syöttää nollan. 
//Ohjelma tulostaa annetut luvut konsoliin suurimmasta pienimpään. (2p)

"use strict";

let luvut = [];
let vastaus=0;

do {
    vastaus = Number(prompt("Anna luku:"));
    if (vastaus !== 0) {
        luvut.push(vastaus);
    }
} while (vastaus !== 0);

luvut.sort((a, b) => b - a);

for (let i = 0; i < luvut.length; i++) {
    console.log(luvut[i]);
}