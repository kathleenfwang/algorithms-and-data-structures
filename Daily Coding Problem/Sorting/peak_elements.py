# your task is to complete this function
# function should return index to the any valid peak element
def peakElement(arr, n):
    # Code here
    for i in range(1,n): 
        
        if (i+1 < n): 
            if (arr[i] > arr[i-1]) and (arr[i] > arr[i+1]):
                return i
        else:
            if (arr[i] > arr[i-1]):
                return i
            else: 
                return i+1
 
arr  =[1,2,3] # should return ind 2 
n = len(arr)
print(peakElement(arr,n))