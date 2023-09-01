function sumSquareDifference(n) {
  var eachSquareN = 0
  var sumNSquare = (n*(n+1)/2)**2
  for (let i=1; i<=n; i++) {
    eachSquareN += i**2
  }

  return Math.abs(eachSquareN - sumNSquare)
}

sumSquareDifference(10);
