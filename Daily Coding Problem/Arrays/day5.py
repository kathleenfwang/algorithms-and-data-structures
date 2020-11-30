 
def remove_duplicate(a):
    dic = {} 
    i = 0
    while (i<len(a)):
        print(i)
        if (a[i] in dic):
            del a[i]
            i = i-1
        else:
            dic[a[i]] = 1 
        i = i+1
    return a
print(remove_duplicate([1,2,2,3,3,3,3,5,5,5]))