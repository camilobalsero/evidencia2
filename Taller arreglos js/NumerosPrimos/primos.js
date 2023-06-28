function mostrarNumerosPrimos(arr) {

    function esPrimo(num) {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  

    for (let i = 0; i < arr.length; i++) {
      if (esPrimo(arr[i])) {
        console.log(arr[i]);
      }
    }
  }
  

  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 97];
  mostrarNumerosPrimos(numeros);
  