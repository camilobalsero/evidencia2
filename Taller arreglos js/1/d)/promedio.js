let array2 = [1, 2, 3, 4, 5, 6];
let suma = 0;

for (let index = 0; index < array2.length; index++) {
    suma = suma + array2[index];
}

console.log("El promedio de los numeros del arreglo es", suma/array2.length);