# Find the median of two sorted arrays.
arr1 = [1, 3, 5]
arr2 = [2, 4, 6]
def find_mid(arr):
    if len(arr) % 2 != 0:
        middle = arr[len(arr) // 2] # 3 -> 1 
    else:
        middle = arr[len(arr) / 2] + arr1[len(arr)/2 -1] 
        middle = middle / 2
    return middle 
def median(arr1,arr2):
    return (find_mid(arr1) + find_mid(arr2)) / 2
     
print(median(arr1, arr2)) # 3.5
