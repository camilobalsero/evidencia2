let j = [200, -100, 45, 78, 32];
console.log(j[2], j[4]);

let f = ["ab", "cd", "ef", "gh"];
console.log(f[1], f[3]);

let aux = [10, true, "k200", 20.7]
aux.forEach(element => console.log(element));

let k = [17, 4, 64, 79, 109, 112];
k.forEach(function impar(numero){
    if(numero % 2 !== 0){
        console.log(numero);
    }
})

let h = [true, true, false,true, false];
h[2] = true;
h[3] = false;
console.log(h);

let w = ["wc", "jp", "zx", "qr"];
w[1] = true;
w[3] = 30;
console.log(w);

function imprimirElementos(array){
    array.forEach(element => console.log(element )      
    )
}
let valorArray = imprimirElementos([2, 5, 7, 9]);

function contarEjemplo(array){

let array1 = prompt("Ingrese lo que quiere que tenga el arreglo separado por espacios").split(" ");
return array1.length;
}
let llamar = contarEjemplo();
console.log(llamar);

let array2 = [30, 44, 54, 89, 100];

let elemento1 = 44;
let elemento2 = 89;
let elemento3 = 70;
let indice = array2.indexOf(elemento1);
let indice2 = array2.indexOf(elemento2);
let indice3 = array2.indexOf(elemento3);
console.log(indice);
console.log(indice2);
console.log(indice3);

let array3 = [3, 50, 70, 600, 40];
array3.forEach(element => console.log(element));

let array4 = [3, 50, 70, 600, 40];
array4.forEach(number => {
    op = number * 3;
    console.log(op);
})

let array5 = [3, 50, 70, 600, 40];
let contador1 = 0;

while (contador1 < array5.length) {
    console.log(array4[contador1]);
    contador1++;
}

for (let index = 0; index < array5.length; index++) {
    let numero = array5[index];
    if (numero % 2 == 0) {
        console.log(numero);
    }
}

let array7 = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let condicion = false;

for (let index = 0; index < array7.length; index++) {
     if (array7[index] === "Juan"){
        condicion = true;
        break;
    }
}

if (condicion){
    console.log("El nombre Juan se encuentra dentro del arreglo");
}else{
    console.log("El nombre Juan no se encuentra dentro del arreglo");
}

let array8 = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

for (let index = 0; index < array8.length; index++) {
    if (array8[index] === "Maria"){
        contador++
    };
    
}
console.log("El nombre Maria se encuentra :",contador,"veces");

let array9 = [15, 7, 9, 12, 1];
let contador3 = 0;

array9.forEach(element => {
    contador3 = contador + element;
})
console.log("La suma de los elementos es :",contador3);


let array10 = [-2, 8, 99, 1, 7];
let contador4 = 0;

array2.forEach(element => {
    op = element * element;
    contador4 = contador4 + op
});

console.log(contador4)

let array11 = [true, true, false, true, false, false];
let contador5 = 0;
let contador6 = 0;

while (contador6 < array11.length) {
    if (array11[contador6] == false){
        contador5++
    }
    contador6++
}
console.log(contador5);


let array12 = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let contenedor = 0;

for (let index10 = 0; index10 < array12.length; index10++) {
    if (array2[index10] === "a"){ 
        contenedor++;
    }
    if (array2[index10] === "d") {
        contenedor++;
    }
    if (array2[index10] === "s") {
        contenedor++
    }
    if (array2[index10] === "o") {
        contenedor++
    }
}

if (contenedor == 4) {
    console.log("Con los elementos del arreglo es posible formar adso");
}else{
    console.log("Con los elementos del arreglo no es posible formar adso");
}

let array13 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let index11 = 0; index11 < array13.length; index11++) {
    let numero = array13[index11];
    op = 5 * numero;
    console.log("5 x",numero,"=",op);
}

const arreglo13 = [5, 7, 90, 2, 5, 3, 8, 99];
let numerosConsecutivos = [];

arreglo13.forEach((a) => {
  arreglo13.forEach((b) => {
    if (a + 1 === b) {
      numerosConsecutivos.push([a, b]);
    }
  });
});

console.log(numerosConsecutivos);