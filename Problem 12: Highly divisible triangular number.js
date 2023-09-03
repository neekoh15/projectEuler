function optimizedDivisors(number) {
  //console.log('number: ', number)
  let totalDivisors =0
  let lastDiv=number
  let stillPrime = true
  let index=0

  while (index < lastDiv) {
    index ++
    if (number%index ==0) {

      stillPrime = false
      lastDiv = number/index

      //console.log('lastDiv: ', lastDiv)

      if (lastDiv > index) {
        totalDivisors +=2
      }
      if (lastDiv == index) {
        totalDivisors +=1
        break
        }

      if (lastDiv < index) {
        break
      }
      
    }

    if (index >= Math.sqrt(number) && stillPrime) {
      console.log('was prime!')
      totalDivisors = 2
      break
    }
  }
  //console.log('totalDivisors: ', totalDivisors)
  return totalDivisors

}


function divisibleTriangleNumber(n) {

  let nthTriangle = null
  let lastVal = 1
  let newVal = 0
  let counter =0

  while (!nthTriangle) {
    newVal += lastVal + counter
    counter ++
    
    if (optimizedDivisors(newVal)>=n) {
      //console.log('result: ',newVal)
      nthTriangle=true
      
      return newVal
    }
  }
}

divisibleTriangleNumber(23);
