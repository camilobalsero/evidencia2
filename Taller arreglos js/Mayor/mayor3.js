function retornoMenor(arreglo) {
    if (arreglo.length === 0) {
        return null; 
    }
    let mayor = arreglo[0];
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] > mayor) {
            mayor = arreglo[index];
        }
    }
    return mayor
}

let numeros = prompt("Ingrese unos numeros separados por comas");
let arreglo1 = numeros.split(",");
let arregloFinal = retornoMenor(arreglo1);
console.log(arregloFinal);