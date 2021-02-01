# your task is to complete this function
# function should return index to the any valid peak element
def peakElement(arr, n):
    # Code here
    for i in range(1,n): 
        if (i+1 < n): 
            # goal is to see if there is a valid "middle" element (i.e. it is greater than previous and less than next element)
            if (arr[i] > arr[i-1]) and (arr[i] > arr[i+1]):
                return i
        else:
            # if we are at the end of the loop (no valid next) check if current is greater than
            if (arr[i] > arr[i-1]):
                return i
            else: 
                return i+1
 
arr  =[1,2,3] # should return ind 2 
n = len(arr)
print(peakElement(arr,n))