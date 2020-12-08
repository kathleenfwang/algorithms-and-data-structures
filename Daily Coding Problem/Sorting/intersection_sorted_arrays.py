def printIntersection(a, b, n, m):
    '''
    :param a: given sorted array a
    :param n: size of sorted array a
    :param b: given sorted array b
    :param m: size of sorted array b
    :return: array of intersection of two array or -1
    '''
    # code here
    # create two dictionaries out of key/values for each array 
    # loop over the larger lengthed array and add the matching keys into the result(values doesnt matter)
    dic1 = {} 
    dic2 = {} 
    result = []
    for i in a:
        if (i in dic1):
            dic1[i] +=1
        else:
            dic1[i] = 1 
    for i in b:
        if (i in dic2):
            dic2[i] +=1
        else:
            dic2[i] = 1 
    if n > m: 
        # loop over a and see if keys in b match 
        for key in dic1:
            if key in dic2: 
                result.append(key)
    else:
        for key in dic2:
            if key in dic1:
                result.append(key)
    return result
arr = "3029 3685 3877 4819 5374 5795 6149 7128 7302 8903 9944 12479 12534 12783 13031 14743 17753 21600 21878 23092 23663 24152 26883 31245 31278 31910"
arr = arr.split(" ")
arr2 = "6149 12479 12534 26883 31245 14743 12783 23092 21600 17753 8903 4819 13031 31278 3029 7128 23663 7302 31910 5374 21878 24152 3685 5795 9944 3877"
arr2 = arr2.split(" ") 
res = len(printIntersection(arr,arr2,len(arr),len(arr2))) == len(arr) 
print(res)
 