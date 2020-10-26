// Given a sentence text (A sentence is a string of space-separated words) in the following format:

// First letter is in upper case.
// Each word in text are separated by a single space.
// Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.

// Return the new text following the format shown above. 

// Input: text = "Leetcode is cool"
// Output: "Is cool leetcode"

function rearrangeWords(str) {
    // make obj of words : length 
    // sort by key/values 
    let arr = str.split(" ") 
    arr[0] =arr[0].toLowerCase() 
    arr.sort((a,b) => a.length - b.length) 
    // [is,cool,leetcode] 
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    //[Is, cool, leetcode] 
    return arr.join(" ")
    }

console.log(rearrangeWords("Leetcode is cool"))