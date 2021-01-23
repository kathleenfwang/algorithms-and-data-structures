arr1 = [1,3,6,7,10,20]
arr2 = [3,6,7,20,30]
result = [3,6,7]
# we use two pointers to move through searching or matching algos
# use two pointers to loop through until one array fnishes
# this is similar to merging two sorted lists into one array
# having two pointers to advance only when certain conditions are met (in this case, when the nums are equal or one is smaller than the other)
def repeating_nums(arr1,arr2):
    result = [] 
    i = 0
    j = 0
    while i < len(arr1) and j < len(arr2):
        # this means arr1 first element is smaller
        if arr1[i] < arr2[j]:
            i+=1 
        elif arr1[i] == arr2[j]:
            result.append(arr1[i])
            i+=1
            j+=1 
        else: 
            j+=1 
    # keep moving until both arrays are finisehd
    return result 
print(repeating_nums(arr1,arr2))
