"use strict"

const luku1Str = prompt("Anna ensimmäinen luku: ");
const luku2Str = prompt("Anna toinen luku: ");
const luku3Str = prompt("Anna kolmas luku: ");

const luku1 = parseInt(luku1Str)
const luku2 = parseInt(luku2Str)
const luku3 = parseInt(luku3Str)

const summa = (luku1 + luku2 + luku3);
const tulo = (luku1 * luku2 * luku3);
const keskiarvo = ((luku1 + luku2 + luku3) / 3);

document.querySelector("#target").innerHTML =
"Lukuhen summa: " + summa + " / Lukujen tulo: " + tulo + " / Lukujen keskiarvo: " + keskiarvo