function encontrarCadenasDeUnaBase(arregloADN) {
    const bases = ["A", "T", "C", "G"];
    const cadenasDeUnaBase = [];
  
    bases.forEach(base => {
      let todasLasBases = true;
      arregloADN.forEach(cadena => {
        if (!cadena.includes(base)) {
          todasLasBases = false;
        }
      });
  
      if (todasLasBases) {
        let cadenaDeUnaBase = "";
        for (let i = 0; i < arregloADN.length; i++) {
          cadenaDeUnaBase += base;
        }
        cadenasDeUnaBase.push(cadenaDeUnaBase);
      }
    });
  
    return cadenasDeUnaBase;
  }
  

  const arregloADN = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
  const cadenasDeUnaBase = encontrarCadenasDeUnaBase(arregloADN);
  console.log(cadenasDeUnaBase);