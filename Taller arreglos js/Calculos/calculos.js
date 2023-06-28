function compararPromedioArreglos(arreglo1, arreglo2) {
    let promedio1 = calcularPromedio(arreglo1);
    let promedio2 = calcularPromedio(arreglo2);
  
    if (promedio1 > promedio2) {
      console.log("El arreglo 1 tiene un promedio mayor:", promedio1);
    } else if (promedio2 > promedio1) {
      console.log("El arreglo 2 tiene un promedio mayor:", promedio2);
    } else {
      console.log("Ambos arreglos tienen el mismo promedio:", promedio1);
    }
  }
  
  function calcularPromedio(arreglo) {
    let suma = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      let numero = parseInt(arreglo[i]);
      if (!isNaN(numero)) {
        suma += numero;
      }
    }
  
    let promedio = suma / arreglo.length;
    return promedio;
  }
  
  // Pedir al usuario que introduzca los arreglos
  let entrada1 = prompt("Introduce los números del primer arreglo separados por coma:");
  let arreglo1 = obtenerArregloDesdeEntrada(entrada1);
  
  let entrada2 = prompt("Introduce los números del segundo arreglo separados por coma:");
  let arreglo2 = obtenerArregloDesdeEntrada(entrada2);
  
  compararPromedioArreglos(arreglo1, arreglo2);
  
  function obtenerArregloDesdeEntrada(entrada) {
    let arreglo = [];
    let numero = "";
  
    for (let i = 0; i < entrada.length; i++) {
      let caracter = entrada[i];
  
      if (caracter !== "," && caracter !== " ") {
        numero += caracter;
      }
  
      if ((caracter === "," || i === entrada.length - 1) && numero !== "") {
        arreglo.push(numero);
        numero = "";
      }
    }
  
    return arreglo;
  }
  