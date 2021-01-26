def rotate_arr(arr,k):
    # [ 1 2 3 4 5], 2 -> [3 4 5 1 2] 
    temp = [] 
    for i in range(k):
        temp.append(arr[i]) # [ 1 2 ]
    # once we shift the arr, we can append this temp back to original
    for i in range(len(arr)-k):
        arr[i] = arr[i+k]
    # now the array: [3 4 5 3 4] 
    print(arr)
    for i in temp: 
        arr[len(arr) - 1 - k + i ] = i 
    return arr 
arr = [1,2,3,4,5,6,7,8]
k = 3
print(rotate_arr(arr,k))