function p(stuff) {
    console.log(stuff)
}
function allUnique(str) {
    for (let i =0;i<str.length;i++) {
        if (str.indexOf(str[i]) !== i) return false 
    }
    return true 
}

function URLify(str) {
    // replace all spaces in string with '%20'
    // i like pie -> i%20like%20pie
    let arr = str.split(" ") 
    return arr.join("%20")
}

function oneAway(s1,s2) {
    // pale, bale // true 
    // flies, flie // true 
    
}

p(allUnique('hello')) // false 
p(URLify('i like pie'))