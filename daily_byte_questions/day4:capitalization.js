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
 
strs.forEach((x) => {
    console.log(capitalization(x))
})