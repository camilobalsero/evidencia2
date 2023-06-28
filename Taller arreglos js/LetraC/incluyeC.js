function verificarLetraC(arrNombres) {
    let cantidadC = 0;
  
    for (let i = 0; i < arrNombres.length; i++) {
      let nombre = arrNombres[i];
  
      for (let j = 0; j < nombre.length; j++) {
        if (nombre[j].toLowerCase() === "c") {
          cantidadC++;
        }
      }
    }
  
    if (cantidadC > 0) {
      console.log("La letra 'c' se encuentra en los nombres.");
      console.log("Cantidad de veces que aparece la letra 'c':", cantidadC);
    } else {
      console.log("La letra 'c' no se encuentra en los nombres.");
    }
  }
  
  let entrada = prompt("Introduce los nombres separados por coma:");
  let nombres = entrada.split(",");
  
  verificarLetraC(nombres);
  