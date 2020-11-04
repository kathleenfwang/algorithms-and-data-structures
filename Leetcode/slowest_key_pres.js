// [[0,2],[1,5],[0,9],[2,15]]

function slowestKey(arr) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let max = arr[0][1]
    let char = null 
    for (let i =1;i<arr.length;i++) {
        // max = Math.max(max,arr[i][1] - arr[i-1][1])
        if (arr[i][1] - arr[i-1][1] > max) {
            max = arr[i][1] - arr[i-1][1]
            char = arr[i][0]
        }
    }
     return alpha[char]
}
let arr = [[0,2],[1,5],[0,9],[2,15]]
console.log(slowestKey(arr))