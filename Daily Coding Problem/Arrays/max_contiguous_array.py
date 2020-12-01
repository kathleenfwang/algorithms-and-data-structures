def maxSubArraySum(a,size):
    max_so_far = a[0]
    curr_max = a[0]
    for i in range(1,size): 
        curr_max = max(a[i], curr_max + a[i])
        max_so_far = max(curr_max,max_so_far)
    return max_so_far
arr = [1,2,3,-2,5]
print(maxSubArraySum(arr,len(arr)))
# optimized to include if array is all negative: 
 