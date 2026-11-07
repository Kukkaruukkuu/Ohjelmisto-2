//Kirjoita ohjelma, joka kysyy käyttäjältä viisi lukua ja tulostaa ne päinvastaisessa järjestyksessä kuin käyttäjä ne syötti 
//(ei siis suuruusjärjestyksessä). Tulosta tulos konsoliin. (2p)
//Tallenna luvut taulukkoon ja käy taulukko sitten for-silmukalla läpi lopusta alkuun.
//Älä käytä metodia array.reverse().

"use strict";

let luvut = [];
let lukumäärä = 0;

while(lukumäärä !==5) {
    const vastaus = prompt("Anna luku");
    luvut.push(vastaus)
    lukumäärä++
}

for (let i = luvut.length - 1; i >= 0; i--) {
    console.log(luvut[i])};