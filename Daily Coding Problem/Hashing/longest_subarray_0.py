# brute force method: 
def longest_subbaray_zero(arr): 
    # 2 -2 1 -1 4 
    max_len = 0 
    for i in range(0,len(arr)):
        arr_len = 0 
        for j in range(i, len(arr)):
            arr_len += arr[j] 
            if arr_len == 0: 
                max_len = max(max_len, j - i + 1)
    return max_len 
arr = [3,-2,2,-2,2,-1,4] # 4
def longest_subarray_zero_2(arr): 
    hash_map = {} 
    curr_sum = 0 
    max_len = 0 
    for i in range(len(arr)):
        curr_sum += arr[i]  
        if arr[i] == 0 and max_len == 0: 
            max_len = 1 
        if curr_sum == 0: 
            max_len = i + 1 
        if curr_sum in hash_map: 
            max_len = max(max_len, i - hash_map[curr_sum]) 
        else: 
            hash_map[curr_sum] = i 
    return max_len

 
print(longest_subarray_zero_2(arr))