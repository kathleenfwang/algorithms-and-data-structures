// "(){}[]", return true
// "(({[]}))", return true
// "{(})", return false
function validateCharacters(str) {
    // if its open, we push to stack 
    // if its closed, we compare with first value of stack (shift) 
    // if not equal RETURN FALSE  
    if (str.length === 1) return false
    // only need one dictionary becaus there is only one conditional we are checking: if the value is open parenthesis (if not then that means it is closed)
    let dict = {"(": ")", "[": "]", "{":"}"}
<<<<<<< HEAD
    let stack = [] // add by unshift, remove by shift, or push/pop
=======
    let stack = [] // add by unshift, remove by shift 
>>>>>>> parent of 3aad312... find min
    for (let i = 0;i<str.length;i++) {
        // if its open, add to stack
       if (open[str[i]]) {
           stack.unshift(str[i]) 
       }
       // else compare it with most recent value in stack 
       else {
           let recent = stack.shift() 
            if (str[i] !== dict[recent]) {
                return false
            }
       }
    }
    // the stack has to be empty, so all of the open have been matched or shifted out
    return stack.length === 0 
}
let strs = ["(){}[]","(({[]}))","{(})"]
strs.forEach((x) => console.log(validateCharacters(x)))

// OLD CODE:
// I basically had two objects, one for open and one for closed paranthesis, and I compared the indexes to see if they were equal.
// if (str.length === 1) return false
// let paran = "(", bracket = "[", squiggle = "{"
// let open = {[paran]:1,[bracket]:2, [squiggle]:3}
// let paran2 = ")", bracket2 = "]", squiggle2 = "}"
// let closed = {[paran2]:1,[bracket2]:2, [squiggle2]:3}
// let stack = [] // add by unshift, remove by shift 
// for (let i = 0;i<str.length;i++) {
// // if its open, add to stack
// if (open[str[i]]) {
//    stack.unshift(str[i]) 
// }
// // else compare it with most recent value in stack 
// else {
//    let recent = stack.shift() 
//     let ind = open[recent] 
//     if (closed[str[i]] !== ind) {
//         return false
//     }
// }
// }
// return stack.length === 0 