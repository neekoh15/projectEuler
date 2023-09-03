function largeSum(arr) {
  let sum = 0
  for (let list of arr) {
    sum += Number(list)
  }
  return Number(String(sum).replace('.', '').slice(0,10));
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
