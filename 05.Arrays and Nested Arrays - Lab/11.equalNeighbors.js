function equalNeighbors(matrix) {
    let count = 0
    let colSequence = 0;
    let res = [];
    count = 0;
    let rowSize = matrix[0].length;

    for (const el of matrix) {       
        for (let index = 0; index < rowSize - 1; index++) {
            if (el[index] == el[index + 1]) {
                count++
            }
        }
    }
    for (const row of matrix) {
        colSequence = row.length
        res.push(...row)
    }
    for (let i = 0; i < res.length; i++) {
        if (res[i] == res[i + colSequence]) {
            count++;
        }
    }
    return count;

}
// equalNeighbors(
//     [['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]
// )
equalNeighbors ([[2, 2, 5, 7, 4,],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]])