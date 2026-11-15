
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