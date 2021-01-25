def find_duplicates(arr1,arr2):
    result = [] 
    dic1 = {} 
    for i in arr1:
        if i not in dic1:
            dic1[i] = 1 
    for j in arr2:
        if j in dic1:
            if dic1[j] == 1:
                result.append(j)
                dic1[j] = 0 
    return result 

arr1 = [1,2,3,4,7]
arr2 = [1,2,4,6]
print(find_duplicates(arr1,arr2)) # N + M 

def find_duplicates_sorted(arr1,arr2):
    i = 0
    j = 0 
    result = []
    while i < len(arr1) and j <len(arr1): 
        if arr1[i] == arr2[j]: 
            result.append(arr1[i])
            i+=1 
            j+=1
        elif arr1[i] < arr2[j]:
            i+=1 
        else:
            j+=1
    return result 
print(find_duplicates(arr1,arr2)) # N or M (whichever is smaller) 
