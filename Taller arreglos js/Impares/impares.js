function contarNumerosImpares(arreglo) {
    let cantidadImpares = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      let numero = parseInt(arreglo[i]);
  
      if (!isNaN(numero) && numero > 0 && numero % 2 !== 0) {
        cantidadImpares++;
      }
    }
  
    console.log("La cantidad de números impares en el arreglo es:", cantidadImpares);
  }
  
  // Pedir al usuario que introduzca el arreglo de números enteros positivos
  let entrada = prompt("Introduce los números separados por coma:");
  let numeros = obtenerArregloDesdeEntrada(entrada);
  
  contarNumerosImpares(numeros);
  
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
  