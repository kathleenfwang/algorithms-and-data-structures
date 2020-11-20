// [1, 3, 8, 2], k = 10, return true (8 + 2)
// [3, 9, 13, 7], k = 8, return false
// [4, 2, 6, 5, 2], k = 4, return true (2 + 2)

function twoSum(nums,sum) {
    // two loops  
    for (let i = 0;i<nums.length;i++) {
        for (let j = i+1;j<nums.length;j++){
            if (nums[i] + nums[j] === sum) return true
        }
    }
    return false
}

function optimalTwoSum(nums,sum) {
    let obj = {} 
    //see if the sum - current value is in the object, if so return true 
    // otherwise store curruent number into an object 
    for (let i = 0;i<nums.length;i++) {
        if (obj[sum-nums[i]]) return true 
        obj[nums[i]] = 1 
    }
    return false 
}
let nums = [1, 3, 8, 2], k = 10
console.log(optimalTwoSum(nums,k))
nums = [3, 9, 13, 7], k = 8
console.log(optimalTwoSum(nums,k))
nums = [4, 2, 6, 5, 2], k = 4
console.log(optimalTwoSum(nums,k))