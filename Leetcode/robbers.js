// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

function maxRobbery(nums) {
    if (!nums || nums.length === 0) return 0 
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0],nums[1])
    let dp = new Array(nums.length)
    dp[0] = nums[0] 
    dp[1] = Math.max(nums[1],nums[0])
    for (let i = 2; i<nums.length;i++) {
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
    }
   return dp[nums.length-1]
} 
let nums1 = [1,2,3,1]
let nums2 = [2,7,9,3,1]
let allNums = []
allNums.push(nums1,nums2)
allNums.map((x) => {
    console.log(maxRobbery(x))
})