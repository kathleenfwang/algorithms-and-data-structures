// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// take the whole product of all numbers, then divide by i each time. 

function productArray(arr) {
    let product = 1 
    let result = [] 
    arr.forEach((num) => product = product * num)
    for (let i =0;i<arr.length;i++) {
        result.push(product/arr[i])
    }
    return result 
}
// Input
// [1,0]
// Output
// [0,0]
let arr = [1, 2, 3, 4, 5]
console.log(productArray(arr))