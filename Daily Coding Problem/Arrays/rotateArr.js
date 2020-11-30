function rotateArr(arr,num){
    let count = 0 
    for (let i =0;i<arr.length;i++){
        for (let j =i;j<num;j++) {
            let temp = arr[j]
            let swap = arr[j+num] 
            arr[j] = swap
            arr[j+num] = temp 
          
        }
        count++
        i = num * count
    }
    console.log(arr)
    return arr
}
rotateArr([1,2,3,4,5],2)