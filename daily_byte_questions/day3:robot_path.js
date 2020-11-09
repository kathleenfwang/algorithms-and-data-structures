function print(something){
    console.log(something)
}

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

function robotPath(str) {
    // make a obj storing all paths 
    // see if R = L, U = D 
    const strObj = str.split("").reduce((prev,next) => {
        if (!prev[next]) prev[next] = 1 
        else {prev[next]++}
        return prev
    }, {})
    return strObj["R"] === strObj["L"] && strObj["U"] === strObj["D"]
}

print(robotPath("URURD")) // false 
print(robotPath("RUULLDRD")) // true