# given a sorted distinct array, return true if a[i] = i 
# recursively uses binary search, O(log2n) runtime instead of O(n) 

#brute force:
arr = [-4,-3,-2,1,4,7,9,10] # len = 7, mid index = 3 
result = False
for i in range(0,len(arr)):
    if arr[i] == i:
        result = True 
        break


#binary search: 
 
def magic_index(arr):
    # find the mid 
    return magic_index_helper(arr,0,len(arr))
def magic_index_helper(arr,start,end):
    mid = (start + end) // 2
    if (mid >= len(arr)):
        return False 
    if (arr[mid] == mid):
        return True 
    if (mid < arr[mid]):
        return magic_index_helper(arr,0,mid-1)
    else:
        return magic_index_helper(arr,mid+1,len(arr))
        
arr = [-4,-3,-2,1,1,5,8]
print(magic_index(arr))