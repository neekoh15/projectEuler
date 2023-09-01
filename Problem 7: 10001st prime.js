function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function nthPrime(n) {
  var primes = [1]

  var counter = 1
  while (primes.length <= n) {
    if (isPrime(counter)) {
      primes.push(counter)
    }
    counter ++
  }
  
  return primes.pop()
}

nthPrime(10001);
