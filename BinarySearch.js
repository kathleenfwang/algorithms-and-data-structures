// recursive 

function binarySearch(list,target) {
    let first = 0 
    let last = list.length -1 
    return recursive(first,last) 
    function recursive(first,last) {
        let mid = Math.floor((first + last) / 2) 
        if (list[mid] === target) {
            return mid
        }
        else if (target > list[mid]) {
             return recursive(mid+1,last)
        }
        else {
            return recursive(first,mid-1)
        }
    }
}
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(arr,5))