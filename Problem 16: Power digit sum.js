function powerDigitSum(exponent) {
  let sum = 0
  let number = String(BigInt(2**exponent)).split('')

  number.forEach((num)=> {
    sum += Number(num)
  })

  return sum
  
}

powerDigitSum(15);
