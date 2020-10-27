// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
function getHash(arr) {
    let obj = {}
    for (let i = 0;i<arr.length;i++){
        obj[arr[i]]?obj[arr[i]]++ : obj[arr[i]] = 1 
    }
    return obj
}
function returnUniqueWords(s1,s2) {
    // split words into str, loop over or place into hash 
    let result = [] 
    let arr1 = s1.split(" ")
    let arr2 = s2.split(" ") // ['the','quick'..]
    let obj1 = getHash(arr1), obj2 = getHash(arr2)
   
        for (let key in obj1) {
            if (!obj2[key]) result.push(key)
        }
        for (let key in obj2) {
            if (!obj1[key]) result.push(key)
        }
    return result
}
let sentence1, sentence2 = "" 
let arrs = [ [sentence1 = "the quick", sentence2 = "brown fox"],
[sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire"],
[sentence1 = "copper coffee pot", sentence2 = "hot coffee pot"]]
arrs.forEach((x) => console.log(returnUniqueWords(...x)))