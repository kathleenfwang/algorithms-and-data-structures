// if alice is higher, alice gets a point, if even no points, if bob higher, bob gets apoint
// output is an array 
function compareTriplets(a,b) {
    // loop through both and compare
    let alice = 0, bob = 0
    for (let i =0;i<a.length;i++) {
        if (a[i] > b[i]) alice++ 
        else if (a[i] < b[i]) bob++ 
    }
    return [alice,bob]
}