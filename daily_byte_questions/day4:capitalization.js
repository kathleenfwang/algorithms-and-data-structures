// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true

function capitalization(str) {
    if (str === str.toUpperCase()) return true 
    if (str === str.toLowerCase()) return true  

    for (let i =0;i<str.length;i++) {
        if (str[i] === str[i].toUpperCase() && i !== 0) return false
    }
    return true 
}
let strs = ["USA", "Calvin", "compUter", "coding"]
 
// strs.forEach((x) => {
//     console.log(capitalization(x))
// })

function capitalization2(str) {
    // this only loops through the string once so it is more efficient 
    // uses a count to keep track of the amount of upper/lower case
    let count = 0 
    for (let i =0;i<str.length;i++) {
        if (str[i] === str[i].toUpperCase()) count++ 
    }
    // if all are caps or none, or first letter is cap, it is valid 
    return count === str.length || count === 0 || (count === 1 && str[0] === str[0].toUpperCase())
}
strs.forEach((x) => {
    console.log(capitalization2(x))
})