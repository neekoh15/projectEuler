function factorial(num) {
  if (num == 1) return 1
  else return num*factorial(num-1)
}

function latticePaths(gridSize) {
  return factorial(2*gridSize)/(factorial(gridSize)**2)
}

latticePaths(4);
