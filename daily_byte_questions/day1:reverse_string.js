// Ex: Given the following strings...

// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

function reverseStrings(str) {
    let reverse = ""
    for (let i =str.length-1;i>=0;i--) {
        reverse+= str[i]
    }
    return reverse
}
function reverseOriginalString(str) {
    for (let i =0;i<str.length/2;i++) {
        let temp = str[i] 
        let last = str[str.length - 1 - i]
        str[i] = last 
        last = temp 
    }
    return str
}

console.log(reverseStrings('The Daily Byte'))


console.log(reverseStrings('Cat'))