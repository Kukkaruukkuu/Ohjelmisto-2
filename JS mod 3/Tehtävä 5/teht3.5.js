
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