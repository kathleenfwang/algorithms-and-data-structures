def mergeArrays(a,b,n,m):
    # code here 
    # return a new list containing distinct numbers
    # have a dictionary storing numbers in list
    # only add in new numbers if not already in dictionary 
    # loop through both arrays, comparing current and including the smaller number
    dic = {} 
    result = [] 
    ind1 = 0 
    ind2 = 0 
    while (ind1 < n and ind2 < m): 
        if (a[ind1] < b[ind2]):
            # check if already added to result 
            if (a[ind1] not in dic):
                dic[a[ind1]] = 1
                result.append(a[ind1]) 
            ind1+=1 
        else:
            if (b[ind2] not in dic):
                dic[b[ind2]] = 1
                result.append(b[ind2])
            ind2+=1 
    # now add all the leftovers to the result 
    for i in range(ind1,n):
        if (a[i] not in dic):
            dic[a[i]] = 1
            result.append(a[i]) 
    for j in range(ind2,m):
        if (b[j] not in dic):
            dic[b[j]] = 1
            result.append(b[j])
    return result

    # another approach:
    def mergeArrays(a,b,n,m):
    '''
    :param a: given sorted array a
    :param n: size of sorted array a
    :param b: given sorted array b
    :param m: size of sorted array b
    :return:  The union of both arrays as a list
    '''
    # code here 
    # return a new list containing distinct numbers
    # have a dictionary storing numbers in list
    # only add in new numbers if not already in dictionary 
    # loop through both arrays, comparing current and including the smaller number
    Intersection = []
    i = j = 0
    
    while i < n and j < m:
        if a[i] < b[j]: 
            # check if the number is duplicate: 
            if (len(Intersection) == 0):
                Intersection.append(a[i]) 
            elif (len(Intersection) > 0 and Intersection[-1] != a[i]):
                Intersection.append(a[i]) 
            i+=1 
        else:
            if (len(Intersection) == 0):
                Intersection.append(b[j]) 
            elif (len(Intersection) > 0 and Intersection[-1] != b[j]):
                Intersection.append(b[j]) 
            j+=1
 
    while i < n:
        if (len(Intersection) == 0):
                Intersection.append(a[i]) 
        elif (len(Intersection) > 0 and Intersection[-1] != a[i]):
            Intersection.append(a[i])
        i += 1

    while j < m:
        if (len(Intersection) == 0):
                Intersection.append(b[j]) 
        elif (len(Intersection) > 0 and Intersection[-1] != b[j]):
            Intersection.append(b[j])
        j += 1
    if not len(Intersection):
        return [-1]
    return Intersection
