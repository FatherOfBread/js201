// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

function arrayAdd (array1, array2){
    let arraySum = []
    let i
    for (i=0;i<array1.length;i++){
        arraySum.push(array1[i]+array2[i])
    }
    return arraySum
}

function matrixAdd (matrix1, matrix2){
    let matrixSum = []
    let i
    for (i=0;i<matrix1.length;i++){
        matrixSum.push(arrayAdd(matrix1[i],matrix2[i]))
    }
    return matrixSum
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

// Dot multiplication of two arrays [a b c] . [d e f] = a.d + b.e + c.f
function arrayMultiply (array1, array2){
    let arrayProduct = 0
    let i
    for (i=0;i<array1.length;i++){
        arrayProduct = arrayProduct + (array1[i]*array2[i])
    }
    return arrayProduct
}

function matrixTranspose (matrix){
    let rowNum = matrix.length
    let columnNum = matrix[0].length
    let transposed = []
    let transRow= []
    let i
    let j
    for (j=0;j<columnNum;j++){
        for (i=0;i<rowNum;i++){
            transRow.push(matrix[i][j])
        }
        transposed.push(transRow)
        transRow = []
    }
    return transposed
}

function matrixMultiply (matrix1, matrix2){
    let matrix2Trans = matrixTranspose(matrix2)
    let matrixProduct = []
    let rowProduct = []
    let i
    let j
    for (j=0;j<matrix1.length;j++){
        for (i=0;i<matrix2Trans.length;i++){
            rowProduct.push(arrayMultiply(matrix1[j],matrix2Trans[i]))
        }
        matrixProduct.push(rowProduct)
        rowProduct = []
    }
    return matrixProduct
}


console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]))
console.log([ [22,  8], [27, 10] ])