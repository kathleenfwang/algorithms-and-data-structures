function countWays(n) {
    if (n < 0) return 0 
    if (n==0) return 1 
    else {
        return countWays(n-1) + countWays(n-2) + countWays(n-3)
    }
}
// memoized 
function memoizedCountWays(n) {
    // 0 steps -> 5 steps 
    let memo = [] 
    for (let i =0;i<=n;i++) {
        memo[i] = -1 
    }
    return memoizedCountWaysHelper(n,memo)
}

function memoizedCountWaysHelper(n,memo){

    if (n<0) return 0 
    // when there is only 1 step (another base case) 
    else if (n === 0 ) {
        return 1
    }
    // if we already seen n steps 
    else if (memo[n] !== -1) {
        return memo[n] 
    }
  
    else {
        memo[n] = memoizedCountWaysHelper(n-1,memo) + 
        memoizedCountWaysHelper(n-2,memo) + 
        memoizedCountWaysHelper(n-3,memo)
    }
    return memo[n]
}
console.log(memoizedCountWays(4))