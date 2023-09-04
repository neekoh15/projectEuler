// Representaciones de palabras de números específicos
const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

// Convertir un número a palabras
function numberToWords(n) {
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + ones[n % 10];
    if (n < 1000) {
        let word = ones[Math.floor(n / 100)] + "hundred";
        if (n % 100 !== 0) word += "and" + numberToWords(n % 100);
        return word;
    }
    return "onethousand";
}

function numberLetterCounts(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += numberToWords(i).length;
    }
    return sum;
}

console.log(numberLetterCounts(5)); // Esto imprimirá la cantidad de letras para los números del 1 al 5
