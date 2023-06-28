let arraynombre = [];
let contador = 0;
function pedirDatos() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de personas"));
    for (let index = 0; index < cantidad; index++) {
        let nombre = prompt("Ingrese el nombre del usuario");
        let edad = parseInt(prompt("Ingrese la edad del usuario"));

        if (edad >= 18) {
            arraynombre.push(nombre);
            contador++;
        }
    }


}

pedirDatos();

console.log("Esta es la cantidad de mayores de edad :",contador)
console.log("Estos son los mayores de edad : ",arraynombre)