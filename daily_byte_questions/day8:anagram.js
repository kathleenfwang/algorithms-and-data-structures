// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false
// make two objs and loop through .. 

function anagram(s1,s2) {
    let obj1 = s1.split('').reduce((prev,next) => {
        prev[next] ? prev[next] ++ : prev[next] = 1
        return prev
    }, {})
    let obj2 = s2.split('').reduce((prev,next) => {
        prev[next] ? prev[next] ++ : prev[next] = 1
        return prev
    }, {})
    for (let key in obj1) {
        if (!obj2[key]) return false 
        if (obj2[key] !== obj1[key]) return false
    }
    return true
}
// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false
let s, t = '' 
let strings = [ [s = "cat", t = "tac"], [s = "listen", t = "silent"], [ s = "program", t = "function"]]
strings.forEach((x) => {
    console.log(anagram(...x))
})