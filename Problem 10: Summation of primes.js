function primeSummation(n) {
  //suponemos que todos los elementos de 1 a n son primos
  let arrayCandidatos = Array(n).fill(true)
  arrayCandidatos[0] = false //0 no es primo
  arrayCandidatos[1] = false //1 no es primo

  let totalSum = 0

  //iteramos hasta raiz de n para eliminar los verdaderos valores que no son primos
  for (let i=2; i< Math.sqrt(n); i++) {
    if (arrayCandidatos[i]) {
      //elimino todos los multiplos de i de los candidatos
      for (let j = i*i; j<=n ; j +=i)
        arrayCandidatos[j] = false
    }
  }
  
  //ahora cuento y sumo los primos
  for (let x=0; x<=n; x++) {
      if (arrayCandidatos[x]) {
        totalSum +=x
      }
    }

  return totalSum;
}

primeSummation(10);
