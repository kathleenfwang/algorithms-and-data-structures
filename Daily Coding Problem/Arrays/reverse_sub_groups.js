function reverseSubGroups(arr,k) {
    let count = 0 
    for (let i =0;i<arr.length;i++) {
        // reverse first subgroups
        for (let j =0;j<Math.floor((k)/2);j++){
            // iterate over starting i index to num 
            // reverseing so only need to go to middle of num 
            let temp = arr[j+i]
            console.log(j+i)
            let last = null 
            // last might be out of range
            if (i+k-1 < arr.length -1) {
                last = arr[i+k-1-j]
                arr[i+k-1-j] = temp 
            }
            else {
                // if last is out of range, set last to be last number in array
                last = arr[arr.length-1-j]
                arr[arr.length-1-j] = temp 
            }
            arr[j+i] = last 
        }
        count++ 
        i = count * k 
        i--
    }
    return arr
}
console.log(reverseSubGroups([1,2,3,4,5,6,7,8,9],5))