function encontrarCadenaMayorTimina(arreglosADN) {
    let cadenaMayorTimina = "";
    let cantidadTiminaMaxima = 0;
  
    for (let i = 0; i < arreglosADN.length; i++) {
      let cadenaADN = arreglosADN[i];
      let cantidadTimina = 0;
  
      for (let j = 0; j < cadenaADN.length; j++) {
        let letra = cadenaADN[j];
  
        if (letra === "T") {
          cantidadTimina++;
        }
      }
  
      if (cantidadTimina > cantidadTiminaMaxima) {
        cadenaMayorTimina = cadenaADN;
        cantidadTiminaMaxima = cantidadTimina;
      }
    }
  
    if (cadenaMayorTimina !== "") {
      console.log("La cadena de ADN con mayor número de Timina (T) es:", cadenaMayorTimina);
      console.log("Cantidad de Timina (T) en la cadena:", cantidadTiminaMaxima);
    } else {
      console.log("No se encontró ninguna cadena de ADN en el arreglo.");
    }
  }
  
  // Pedir al usuario que introduzca los arreglos de cadenas de ADN
  let entrada = prompt("Introduce las cadenas de ADN separadas por coma:");
  let arreglosADN = obtenerArreglosDesdeEntrada(entrada);
  
  encontrarCadenaMayorTimina(arreglosADN);
  
  function obtenerArreglosDesdeEntrada(entrada) {
    let arreglos = [];
    let cadena = "";
  
    for (let i = 0; i < entrada.length; i++) {
      let caracter = entrada[i];
  
      if (caracter !== "," && caracter !== " ") {
        cadena += caracter;
      }
  
      if ((caracter === "," || i === entrada.length - 1) && cadena !== "") {
        arreglos.push(cadena);
        cadena = "";
      }
    }
  
    return arreglos;
  }
  


console.log("La letra T se repite",contadorT)


