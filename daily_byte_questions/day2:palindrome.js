// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true
function print(something){
    console.log(something)
}
function isPalindrome(str) {
    // strings are immutable in javascript, which is why we store the characcters in an array first. otherwise if we keep adding to the string, it creates a copy of the string each time and is not space efficient (O(N))
    let characters = [] 
    for (let i = str.length-1;i>=0;i--) {
        characters.push(str[i])
    }
    return characters.join("") === str
}
print(isPalindrome('level'))