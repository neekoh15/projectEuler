function fiboEvenSum(n) {

  let lastVal = 0
  let preVal = 1
  let newVal = 0

  let sum = 0
  for(let i=1; i<n; i++) {

    newVal = lastVal+preVal
    lastVal = preVal
    preVal = newVal

    if (newVal%2==0 && newVal <= n) {
      sum += newVal
    }
  }

  return sum;
}
