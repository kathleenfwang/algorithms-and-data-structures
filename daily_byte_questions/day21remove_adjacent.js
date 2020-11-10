// Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result.

// Ex: Given the following strings...

// s = "abccba", return ""
// s = "foobar", return "fbar"
// s = "abccbefggfe", return "a"
 // s = hhllo, return "o"

function removeAdjacent(str) {
     let arr = str.split("") 
     // we put the string into a que because queus can be modified more efficiently than strings 
     // we compare the next letter to the most recent, if its the same, we pop 
     // we repeat this until the result
     let counter = 0 
     let result = [str[0]] 
     for (let i = 1;i<arr.length;i++ ) {
 
        if (str[i] === result[counter]) {
            // we move the counter down so the next value can compare to the one before the one that will get popped
            counter--
            result.pop() 
        }
        else {
            // increment the counter forward because we are comparing adjacent values 
            counter++
            result.push(str[i])
        }
     }
     return result.join("")
}
let s = "" 
let arr = [s = "abccba",  
s = "foobar",  
s = "abccbefggfe",  
 s = "hhllo"]
arr.forEach((x) => console.log(removeAdjacent(x)))