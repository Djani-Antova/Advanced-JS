function equalNeighbors(matrix) {
    //init counter
    let counter = 0;

    //check rows
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
                counter++
            }
        }
    }
    
    //check columns
    const rowSize = matrix[0].length;

    for (let colIndex = 0; colIndex < rowSize; colIndex++) {
        for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex +1][colIndex]) {
                counter++
            }
        }
    }
    //print result
    console.log(counter);

}
equalNeighbors([[2, 2, 5, 7, 4,],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]])