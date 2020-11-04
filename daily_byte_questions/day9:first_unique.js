// Given a string, return the index of its first unique character. If a unique character does not exist, return -1.
// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0

function firstUnique(str) {
    let inds = {} 
    for (let i =0;i<str.length;i++) {
        inds[str[i]] ? inds[str[i]]++ : inds[str[i]] = 1 
    }
    for (let i = 0;i<str.length;i++ ){
        if (inds[str[i]] === 1) return i 
    }
    return 0 
}
// run time is 2n -> n, two seperate loops over string length, and both have constant lookup of key-matching in dictionary 
let strs = ["abcabd","thedailybyte","developer"]

strs.forEach((x) => console.log(firstUnique(x)))