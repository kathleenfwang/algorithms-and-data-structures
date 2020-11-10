// s = "foobar", t = "barfoot", return 't'
// s = "ide", t = "idea", return 'a'
// s = "coding", t "ingcod", return ''

function spot_difference(s1,s2) {
    let obj1 = {}, obj2 = {}
    for (let i =0;i<s1.length;i++) {
        obj1[s1[i]] ? obj1[s1[i]]++ : obj1[s1[i]] = 1 
    }
    for (let i =0;i<s2.length;i++) {
        obj2[s2[i]] ? obj2[s2[i]]++ : obj2[s2[i]] = 1 
    }

    for (let key in obj2) {
        if (!obj1[key]) return key 
        if (obj2[key] !== obj1[key]) return key 
    }


    return ''
}
// s = "foobar", t = "barfoot", return 't'
// s = "ide", t = "idea", return 'a'
// s = "coding", t "ingcod", return ''
let s = '',t=''
let strs = [ [ s = "foobar", t = "barfoot"], [s = "ide", t = "idea"], [s = "coding", t = "ingcod"]]

strs.forEach((x) => console.log(spot_difference(...x)))