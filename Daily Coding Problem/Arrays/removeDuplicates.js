function removeDuplicates(arr) {
    let dic = {} 
    for (let i =0;i<arr.length;i++) {
        if (dic[arr[i]]){
            arr.splice(i,1)
            i--
        }
        else {
            dic[arr[i]] = 1 
        }
    }
    return arr
}

let arr = [1,2,2,2,2,3,3,3,3,3,5,5]
console.log(removeDuplicates(arr))