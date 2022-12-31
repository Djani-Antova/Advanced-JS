function diagonalSums(matrix) {

    let diagMain = 0;
    let diagSecond = 0;
    let matLength = matrix.length;

    for (let i = 0; i < matLength; i++) {
        diagMain += matrix[i][i] 
    }

    for (let j = matLength - 1; j >= 0; j--) {        
        diagSecond += (matrix[matLength - 1 - j][j]);
    }
    console.log(diagMain, diagSecond);

}
diagonalSums
    ([[20, 40],
    [10, 60]])
    console.log('====');
diagonalSums
    ([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])


//      [*,  *,  *,  *]
//      [*,  *,  *,  *]
//      [*,  *,  *,  *]
//      [*,  *,  *,  *]