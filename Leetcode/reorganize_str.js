// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

// Example 1:

// Input: S = "aab"
// Output: "aba"

function reorganizeStr(str) {
    let obj = {} 
    let result = ""
    for (let i =0;i<str.length;i++) {
        obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1 
    }
    // {a: 3, b: 1} 
    // go through each key and take out
    // have to sort this.. 
    let sorted = Object.keys(obj).sort((a,b) => obj[b] - obj[a])
    // [a,b] 
    if (sorted.length === 1) return result 
    while (obj[sorted[0]] > 0 || sorted.length > 1) {
        for (let i =0;i<sorted.length;i++) {
            if (obj[sorted[i]] === 0) sorted = sorted.filter((x) => x !== sorted[i])
            result += sorted[i] 
            obj[sorted[i]]-- 
           
        }
    }
   return obj[sorted[0]] >= 1 ? "" : result 
    
}
console.log(reorganizeStr('aaba'))