// Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.

// Ex: Given the following strings...

// s = "ABC#", t = "CD##AB", return true
// s = "como#pur#ter", t = "computer", return true
// s = "cof#dim#ng", t = "code", return false
// this can also work with a stack and use shift/unshift 
// we use a queue/stack because they allow us to modify most recently added values. 
function createQue(str) {
    let que = [] 
    for (let i =0;i<str.length;i++) {
        if (str[i]!== "#") {
            que.push(str[i])
        }
        else {
            que.pop() 
        }
    }
    return que 
}
function takeOutBackspaces(s1,s2) {
    let que1 = createQue(s1), que2 = createQue(s2)
   // compare if remaingn queus are the same 
   if (que1.length !== que2.length) return false 
   for (let i =0;i<que1.length;i++) {
       if (que2[i] !== que1[i]) return false 
   }
   return true 
}
let s, t = "" 
let arr = [
    [s = "ABC#", t = "CD##AB"],
    [s = "como#pur#ter", t = "computer" ],
   [ s = "cof#dim#ng", t = "code" ],
]

arr.forEach((x) => console.log(takeOutBackspaces(...x)))