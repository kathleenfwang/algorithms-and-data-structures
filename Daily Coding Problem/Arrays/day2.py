# Given an array of numbers, return sum of the two largest numbers

# can do two loops and find the sum 
# want O(n) time (so just one loop)
# find the two largest numbers and return their sum 
# keep two maxes? 

def find_max(arr):
    # find max1 and max2: 
    if (arr[0] > arr[1]):
        max1 = arr[0]
        max2 = arr[1]
    else:
        max1 = arr[1]
        max2 = arr[0] 
    
    # loop through array starting at index 2: 
    for i in range(2,len(arr)):
        if (arr[i] > max1):
            max1 = arr[i] 
        elif (arr[i] > max2):
            max2 = arr[i]
    print(max1,max2)
    return max1 + max2 
arrs = [
    [2, 4, 6, 2, 5], 
    [5, 1, 1, 5]
]
for arr in arrs:
    print(find_max(arr))