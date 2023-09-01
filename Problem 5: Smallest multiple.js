function greatestCommonDivisor(a, b) {
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function leastCommonMultiple(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}

function smallestMult(n) {
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result = leastCommonMultiple(result, i);
  }
  
  return result;
}

