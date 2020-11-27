# sum of all numbers in array 

def sum(arr):
    # iterative approach
    result = 0 
    for num in arr:
        result += num 
# in recurssion, you get to the beginning of the array while saving all of the previous values
arr = [1,2,3,4,5]
def recurrsion_sum(arr,ind):
    if (ind == len(arr)):
        return 0 
    return arr[ind] + recurrsion_sum(arr,ind+1)
print(recurrsion_sum(arr,0))