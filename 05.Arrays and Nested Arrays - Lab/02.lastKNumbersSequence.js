function lastKNumbersSequence(n, k) {

    const numbers = [1];

    for (let i = 0; i < n; i++) {
        if (numbers.length < n) {
            const sum = numbers   //(8) [1, 1, 2, 3, 5, 8, 13, 21]
                .slice(-k)
                .reduce((a, b) => a + b, 0);
            numbers.push(sum);
        }
    }
    return numbers

}
lastKNumbersSequence(8, 2)
