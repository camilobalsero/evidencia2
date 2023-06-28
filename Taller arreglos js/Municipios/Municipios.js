let valle = ["Cali", "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];

let valleOrdenado = [];
let quindioOrdenado = [];

for (let i = 0; i < valle.length; i++) {
  let ciudad = valle[i];
  if (quindio.includes(ciudad)) {
    quindioOrdenado.push(ciudad);
  } else {
    valleOrdenado.push(ciudad);
  }
}

for (let i = 0; i < quindio.length; i++) {
  let ciudad = quindio[i];
  if (!quindioOrdenado.includes(ciudad)) {
    quindioOrdenado.push(ciudad);
  }
}

console.log("Arreglo Valle ordenado:", valleOrdenado);
console.log("Arreglo Quindio ordenado:", quindioOrdenado);