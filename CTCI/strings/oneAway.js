function oneAway(s1,s2) {
    // valid only if lengths are equal, or length differnece is +=1
    let len1 = s1.length,len2 = s2.length 
    if (len1 === len2) {
        return editOne(s1,s2) // pale, bale 
    }
    else if (len1 - len2 === 1) {
        return removeOne(s1,s2) // pales,pale
    }
    else if (len2 - len1 === 1) {
        return removeOne(s2,s1) // pal, pale 
    }
    else {
        return false 
    }
}
function editOne(s1,s2) {
    // check if there is only one different letter 
    let count = 0 
    for (let i =0;i<s1.length;i++) {
        if (s1[i] !== s2[i]) count++ 
    }
    return count === 1 || count === 0 
}
function removeOne(bigger,smaller) {
    // see if similar letters is all but one - length 
    let count = 0
    let result = 0 
    for (let i =0;i<smaller.length;i++) {
        if (smaller[i] !== bigger[count]) {
            result++ 
            count++ 
            i-- 
        }
        else {
            count++ 
        }
    }
    return result === 1 || result === 0
}
let strings =[
    ["pale","pales"], // true 
    ["ale","abe"], // true 
    ["ales","ale"], // true
    ["big","biges"] // false 
]
strings.forEach((x) => {
    console.log(oneAway(...x))
})