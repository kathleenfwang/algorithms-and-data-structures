def first_missing_positive(nums):
    result = 1 
    # so if the numbers !== result, we can return result 
    # otherwise it nums match result, result += 2 
    seen = {} 
    for i in nums: 
        seen[i] = 1 
        if i == result:
            result+=1
            # lookup in dictionary is O(1) runtime
            while result in seen: 
                result+=1 
       
    return result 
arr = [2147483647,2147483646,2147483645,3,2,1,-1,0,-2147483648] # should be 4
print(first_missing_positive(arr))