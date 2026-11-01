"user strict"

const nimi = prompt("Anna nimesi: ");

const numero = Math.floor(Math.random() * 4) + 1;

let tupa = "";

switch(numero){
    case 1 :
        tupa = "Rohkelikko";
        break;
    case 2 :
        tupa = "Luihunen";
        break;
    case 3 :
        tupa = "Puuskupuh";
        break;
    case 4 :
        tupa = "Korpinkunsi";
        break;
};

target.innerHTML = nimi + " sinä olet " + tupa + "!"
