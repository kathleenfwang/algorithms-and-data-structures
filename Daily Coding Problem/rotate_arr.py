
def rotateArr(arr,d):
    #Your code here
    # first swap the first and the last rotate
    i=0
    while i < len(arr):
        # swap up to n 
        for j in range(i,d):
            temp = arr[j]
            # last in i-d
            swap = arr[d+i] 
            arr[j] = swap 
            arr[d+i] = temp 
        i = j + 1
    return arr
print(rotateArr([1,2,3,4,5,6,7,8,9,10],9))