function maxSubArraySum(arr,num) {
    let sum = 0; 
    let maxSum = 0; 
    
    for (let i =0;i<num;i++){
        sum+= arr[i]
    }
    maxSum = sum; 
    // sum = 5
    console.log(sum)

    for (let i = num;i<arr.length;i++) {
        sum+= arr[i]; 
        sum-= arr[i - num];  
        if (sum > maxSum) maxSum = sum; 
    }
    return maxSum 
     
}
maxSubArraySum([3,2,5,6,1,5,8],3) // 14

function findLongestSubstring(str) {
    let counter = 1; 
    for (let i =1;i<str.length;i++) {
        if (str.charCodeAt(i) !== str.charCodeAt(i-1)) 
        {

            counter++;
        }
        
        else {
            return counter 
        }
         
         
    }
    return counter 
}

findLongestSubstring('kathleen')  // 6 