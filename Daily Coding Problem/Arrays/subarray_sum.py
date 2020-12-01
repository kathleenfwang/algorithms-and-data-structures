def subArraySum(arr, sum): 
    #Your code here
    # initialize current sum to be first element in arr
    curr_sum = arr[0]
    start = 0 
    i = 1 
    while (i < len(arr)):
        curr_sum += arr[i] 
        if curr_sum == sum:
            return [start+1,i+1]
        if curr_sum > sum:
            # remove i elements from the beginning
            j = 0
            while(curr_sum > sum and j <= i):
                curr_sum-=arr[j] 
                j+=1
                start+=1
            if (curr_sum == sum):
                return [start+1,i+1]
        i+=1
    return -1
arr = [1,2,3,7,5]
n = 12
print(subArraySum(arr,n))