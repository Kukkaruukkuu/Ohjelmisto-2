//Kirjoita ohjelma, joka kysyy käyttäjältä lukuja. Kun käyttäjä syöttää luvun, jonka hän on jo aiemmin syöttänyt, 
//ohjelma ilmoittaa, että luku on jo annettu, 
//lopettaa toimintansa ja tulostaa kaikki annetut luvut konsoliin nousevassa järjestyksessä. (2p)

"use strict"

let luvut = [];

while (true) {
    let vastaus = Number(prompt("Anna luku:"));
    if (luvut.includes(vastaus)) {
        alert("Luku " + vastaus + " on jo annettu!");
        break;
    }
    luvut.push(vastaus);
}

luvut.sort((a, b) => a - b);

console.log("Luvut:");
for (let i = 0; i < luvut.length; i++) {
    console.log(luvut[i]);
}