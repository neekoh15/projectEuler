//aux function for prime checking
function isPrime(factor) {
    for(let i=2; i<=factor; i++) {
      if (factor%i==0 && i!=factor) {
        return false
      }
    }
    return true
  }

function largestPrimeFactor(number) {

  let largestFactor = 1
  for (let x=1; x<=number; x++) {
    if (number%x==0 && isPrime(x)) {
      largestFactor = x
    }
  }

  return largestFactor
}

largestPrimeFactor(13195);
