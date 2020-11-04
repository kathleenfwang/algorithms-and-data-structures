// Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

// Return the maximum possible length of s.

// Example 1:

// Input: arr = ["un","iq","ue"]
// Output: 4
// Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
// Maximum length is 4.

function maxLenUnique(arr) {
    let arrs = [] 
    let max = 0 
    for (let i =0;i<arr.length;i++) {
        let str = arr[i]
        for (let j =i+1;j<arr.length;j++) {
          str += arr[j] 
        }
        arrs.push(str)
    }
    console.log(arrs)
    arrs.forEach((x) => max = Math.max(max,isUnique(x)))
        // [uniq, unue, ique]   
        function isUnique(str) {
            let len = str.length
            for (let i =0;i<str.length;i++) {
                if (str.indexOf(str[i]) !== i ) {
                        console.log('yes')
                    len-- }
            
        }
        return len 
    }
    return arr.length === 1 ?  arr[0].length : max
}
// let arrs = [["un","iq","ue"], ["cha","r","act","ers"],["abcdefghijklmnopqrstuvwxyz"]] 
// arrs.forEach((x) => console.log(maxLenUnique(x)))
console.log(maxLenUnique(["un","iq","ue"]))