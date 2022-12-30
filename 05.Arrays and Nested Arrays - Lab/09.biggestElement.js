function biggestElement(matrix) {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        res = res.concat(matrix[i]);
    }
    let biggest = Math.max(...res)
    return biggest;
}

biggestElement([[20, 50, 10],
[8, 33, 145]]
)