def findMedianSortedArrays(arr1, n, arr2, n2):
    #code here
    # merge both arrays into one 
    # find midpoint (Math.floor(len / 2) 
    result = [] 
    ind1 = 0 
    ind2 = 0 
    # both indexes have to be less than length 
    
    while (ind1 < n and ind2 < n2):
        if (arr1[ind1] < arr2[ind2]):
            result.append(arr1[ind1])
            ind1+=1
        else:
            result.append(arr2[ind2])
            ind2+=1
    # append the remainder at the ends
    for i in range(ind1,n):
        result.append(arr1[i])
    for j in range(ind2,n2):
        result.append(arr2[j])
    # find midpoint of result 
    if len(result) % 2 != 0:
        return result[len(result) //2]
    else:
        # find the two middles and add together and divide by 2
        mid1 = result[len(result)//2]
        mid2 = result[len(result)//2 -1]
        return (mid1 + mid2) // 2 