// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Example:

// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,

// return 13.

function kthSmallestElement(matrix,k) {
    let n = matrix.length // 3 
    let counter = 1 
    // loop through until you get to k ? 
    for (let i = 0;i<matrix.length;i++) {
        for (let j =0;j<matrix[i].length;j++) {
            if (counter === k) {
                return matrix[i][j] 
            }
            counter++ 
        }
    }
}
let matrix,k = null 
matrix = [
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
 ],
 k = 8 
 console.log(kthSmallestElement(matrix,k))