// 'aabccccaaa' -> 'a2b1c4a3'

function stringCompression(str) {
    let result = [{[str[0]]:1}] 
    let count = 0 
    let final = [] 
    for (let i =1;i<str.length;i++) {
        if (str[i] === str[i-1]) {
            result[count][str[i]]+=1
        }
        else {
            count++ 
            // make a new dictionary in array 
            result[count] = {[str[i]]:1}
        }
    }
    result.forEach((dic) => {
        let key = Object.keys(dic)[0]
        final.push(`${key}${dic[key]}`)
    })
    return final.join('') // [{a:3}, {b:1} .. ]
}
let str = 'aabccccaaa'
console.log(stringCompression(str))