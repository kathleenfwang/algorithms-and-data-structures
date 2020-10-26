// Given a set of strings and a query sub-string, find all strings that have word(s) start with the sub-string  
let strings = ['hat','hail','apple','aha','tac'] 
let sub = 'ha' // return 2 

function queryStrings(strings,sub) {
    // loop thru strings and check if the slice up to sub's length is = to sub

    let count = 0 
    for (let i =0 ;i<strings.length;i++) {
        let len = sub.length
        if (len > strings[i].length) return false
        let slice =  strings[i].slice(0,len)
        if (slice === sub) count++
    }
    return count
}
console.log(queryStrings(strings,sub))