# split string into array 
# reverse array up to the middle 
# return array as a string 
def reverse(str):
    arr = [] 
    # no split individ characters into a list with split in python
    for i in str: 
        arr.append(i)
    mid = len(arr)//2 
    for i in range(0,mid):
        temp = arr[i] 
        last = len(arr) - 1 - i 
        arr[i]  = arr[last]
        arr[last] = temp 
    return "".join(arr)
print(reverse('hello'))