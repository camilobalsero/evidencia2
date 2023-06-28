function retornoMenor(arreglo) {
    if (arreglo.length === 0) {
        return null; 
    }
    let menor = arreglo[0];
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] < menor) {
            menor = arreglo[index];
        }
    }
    return menor
}

let numeros = prompt("Ingrese unos numeros separados por comas");
let arreglo1 = numeros.split(",");
let arregloFinal = retornoMenor(arreglo1);
console.log(arregloFinal);