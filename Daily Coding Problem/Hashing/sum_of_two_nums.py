def sum_of_two_nums(arr1,arr2,value):
    dic = {} 
    for i in arr1: 
        dic[value - i] = 1 
    for j in arr2: 
        if j in dic: 
            return True
    return False 
arr1 = [1,2,3]
arr2 = [40,41,42]
value = 42
print(sum_of_two_nums(arr1,arr2,value))