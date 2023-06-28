let frutas1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let verdura2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

for (let i = 0; i < frutas1.length; i++) {
  let elemento = frutas1[i];
  if (esFruta(elemento)) {
    frutas.push(elemento);
  } else {
    verduras.push(elemento);
  }
}

for (let i = 0; i < verdura2.length; i++) {
  let elemento = verdura2[i];
  if (esFruta(elemento)) {
    frutas.push(elemento);
  } else {
    verduras.push(elemento);
  }
}

function esFruta(elemento) {
  let frutas = ["Manzana", "Pera", "Banano", "Limón"];
  return frutas.includes(elemento);
}

console.log("Arreglo de frutas ordenado:", frutas);
console.log("Arreglo de verduras ordenado:", verduras);
