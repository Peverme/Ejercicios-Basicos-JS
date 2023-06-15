let num1 = prompt("Ingrese un número:");
let resto = num1 % 2;

function divisible(){
    if( resto === 0){
        console.log("Es divisible por 2");
    }else{
        console.log("No es divisible por 2");
    }
}

divisible(resto);