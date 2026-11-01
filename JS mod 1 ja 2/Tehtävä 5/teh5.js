"use strict"

const vuosi = prompt("Anna vuosi: ")

if (( vuosi % 4 === 0 && vuosi % 100!== 0) || ( vuosi % 400 === 0)){
    target.innerHTML = "Vuosi on karkausvuosi."
}
else{
    target.innerHTML = "Vuosi ei ole karkausvuosi."
};