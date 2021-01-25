
def rotateArr(arr,d):
    #Your code here
    # rotate array by 1 each time for d 
    # two loops total 
    for a in range(0,d): 
        temp = arr[0] 
        for i in range(1,len(arr)):
            arr[i-1] = arr[i] 
        arr[len(arr)-1] = temp 
    return arr
print(rotateArr([1,2,3,4,5],2))

def rotateArr2(arr,d):
    temp = [] 
    for i in range(0,d):
        temp.append(arr[i])
         
    arr = arr + temp 
    return arr 
arr = [1,2,3,4,5]
print(rotateArr2(arr,2))
