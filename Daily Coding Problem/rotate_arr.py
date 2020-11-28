
def rotateArr(arr,d):
    #Your code here
    # swap the D - arr.length variables with the beginning variables
    for i in range(0,len(arr)-d):
        beg = arr[i] 
        # get the rotated value and set at beg
        rotated = arr[d+i] 
        arr[i] = rotated
        # beginning's new value is at (len-d-1-i) 
        arr[len(arr)-d+i] = beg 
    return arr
print(rotateArr([1,2,3,4,5,6,7,8,9,10],9))