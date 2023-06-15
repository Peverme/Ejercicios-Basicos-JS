let oracion = prompt("Escribe una frase!!!");
let vocal = "a";
let loop = 0;
for (var i = 0; i < oracion.length; i++ ){
    if(oracion[i] === vocal) {
        loop++;
    }
}

document.write("La letra a se repite " + loop);