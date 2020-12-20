def printNonRepeated(arr):
    #Your code here
    # add elements and their frequencies into a dictionary 
    # print out the elements with a value of 1 
    dic = {} 
    result =[]
    for i in arr: 
        if (i in dic):
            dic[i] +=1 
        else:
            dic[i] = 1 
    # loop through dictionary, printing out keys with value of 1 
    for j in dic: 
        if dic[j] == 1:
            result.append(j)
    return result
arr = [0,9,2,3,4,8,7]
print(printNonRepeated(arr))