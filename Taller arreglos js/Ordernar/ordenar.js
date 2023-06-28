function ordenarArray(arreglo) {
    for (let i = 0; i < arreglo.length - 1; i++) {
      for (let j = 0; j < arreglo.length - i - 1; j++) {
        if (arreglo[j] > arreglo[j + 1]) {
          let temp = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = temp;
        }
      }
    }

    return arreglo;
  }


  let entrada = prompt("Introduce los números separados por coma:");
  let numeros = obtenerArray(entrada);

  let arregloOrdenado = ordenarArray(numeros);

  console.log("Arreglo ordenado:", arregloOrdenado);

  function obtenerArray(entrada) {
    let arreglo = [];
    let numero = "";

    for (let i = 0; i < entrada.length; i++) {
      let caracter = entrada[i];

      if (caracter !== "," && caracter !== " ") {
        numero += caracter;
      }

      if ((caracter === "," || i === entrada.length - 1) && numero !== "") {
        arreglo.push(parseInt(numero));
        numero = "";
      }
    }

    return arreglo;
  }
