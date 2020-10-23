// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0

function jewelsAndStones(jewels,stones) {
    // turn jewels into object 
    // loop through stones and see if they are in jewels 
    // we only need to make one object because we aren't seeing if jewels r in the stones.. 

    let jewelObj = {} 
    jewelCount = 0 
    for (let i =0;i<jewels.length;i++) {
        jewelObj[jewels[i]] ? jewelObj[jewels[i]] ++ : jewelObj[jewels[i]] = 1
    }
    for (let i = 0;i<stones.length;i++) {
        jewelObj[stones[i]] ? jewelCount ++ : null 
    }
    return jewelCount
}
// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0
let jewels,stones = '' 
let list = [[jewels = "abc", stones = "ac"],[jewels = "Af", stones = "AaaddfFf"],[jewels = "AYOPD", stones = "ayopd"]]

list.forEach((x) => console.log(jewelsAndStones(...x)))