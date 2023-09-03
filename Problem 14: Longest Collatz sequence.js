function longestCollatzSequence(limit) {
    let longestChain = 0;
    let value = 0;
    let chainsSeen = new Array(limit + 1).fill(0);  // Inicializar array con ceros

    chainsSeen[1] = 4;  // Sabemos que la cadena para 1 tiene una longitud de 4

    for (let startingValue = 2; startingValue <= limit; startingValue++) {
        let n = startingValue;
        let steps = 0;

        while (n !== 1 && n >= startingValue) {
            if (n % 2 === 0) {
                n /= 2;
            } else {
                n = 3 * n + 1;
            }

            steps++;
        }

        // Sumamos los pasos previamente calculados si n no es 1
        chainsSeen[startingValue] = steps + chainsSeen[n];

        if (chainsSeen[startingValue] > longestChain) {
            longestChain = chainsSeen[startingValue];
            value = startingValue;
        }
    }

    return value;
}

longestCollatzSequence(1000000);
