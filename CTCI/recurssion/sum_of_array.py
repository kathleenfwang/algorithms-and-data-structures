# sum of all numbers in array 

def sum(arr):
    # iterative approach
    result = 0 
    for num in arr:
        result += num 
# in recurssion, you start at beginning of array and keep adding until you get to the length as the base case
arr = [1,2,3,4,5]
def recurrsion_sum(arr,ind):
    if (ind == len(arr)):
        return 0 
    return arr[ind] + recurrsion_sum(arr,ind+1)
print(recurrsion_sum(arr,0))