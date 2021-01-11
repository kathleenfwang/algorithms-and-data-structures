def merge_sorted_lists(l1,l2):
    i,j,k = 0,0,0 
    len1 = 3
    len2 = 3
    temp = l1.copy() 
    while (i<len1 and j <len2):
        if (temp[i] < l2[j]):
            l1[k] = temp[i] 
            i+=1 
        else:
            l1[k] = l2[j]
            j+=1 
        k+=1 
    while (i < len1):
        l1[k] = temp[i]
        k+=1 
        i+=1
    while (j < len2):
        l1[k] = l2[j]
        k+=1 
        j+=1 
    print(l1)

merge_sorted_lists([1,2,3,0,0,0], [2,4,6])