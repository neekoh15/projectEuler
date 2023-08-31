//aux function for palindrome checking
function isPalindrome(product) {
  var str = String(product);
  var reversedStr = str.split('').reverse().join('');
  return str == reversedStr;
}

function largestPalindromeProduct(n) {

  let largestPalindrome = 0

  for (let x=10**(n-1); x < 10**(n); x++) {
    for (let y=10**(n-1); y < 10**(n); y++) {
      if (isPalindrome(x*y) && x*y > largestPalindrome) {
        largestPalindrome = x*y
      }
    }
  }

  return largestPalindrome;
}

largestPalindromeProduct(3);
