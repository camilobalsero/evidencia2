function ordenarArreglo(arreglo) {
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
  let entrada = prompt("Introduce las letras separadas por coma:");
  let letras = obtenerArregloDesdeEntrada(entrada);

  let arregloOrdenado = ordenarArreglo(letras);

  console.log("Arreglo ordenado alfabéticamente:", arregloOrdenado);

  function obtenerArregloDesdeEntrada(entrada) {
    let arreglo = [];
    let letra = "";

    for (let i = 0; i < entrada.length; i++) {
      let caracter = entrada[i];

      if (caracter !== "," && caracter !== " ") {
        letra = caracter.toUpperCase(); // Convertir a mayúscula para mantener la consistencia en la comparación
        arreglo.push(letra);
      }
    }

    return arreglo;
  }
