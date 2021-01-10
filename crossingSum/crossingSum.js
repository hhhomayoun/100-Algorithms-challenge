function crossingSum(matrix, a, b) {
    let row = 0
    let col = 0

    for (let i = 0; i < matrix[a].length; i++) {
        row += matrix[a][i]
    }
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][b] !== matrix[a][b]) {

            col += matrix[j][b]
        }
    }

    return col + row
}

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));