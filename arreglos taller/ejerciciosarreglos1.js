let array = [1,2,3,4,5,6];
let contador = 0;
while(contador<array.length){
    contador++
    console.log(array[contador]);
}

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);   
}

let array2 = [];
for (let index = 0; index < array.length; index++) {
    array2[index] = array[index] + 1;
    console.log(array2)
}

let cantidadElementos = 0;
let suma = 0

for (let index = 0; index < array.length; index++) {
    suma += array[index];
    cantidadElementos++;
}
let promedio = suma /cantidadElementos;
console.log(promedio);

