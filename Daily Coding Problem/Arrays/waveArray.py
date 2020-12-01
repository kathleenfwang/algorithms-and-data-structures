def convertToWave(a,n):
    #Your code here
    # if current element is bigger than previous, swap with previous
    i=1
    while i < n:
        if (a[i] > a[i-1]):
            temp = a[i-1]
            a[i-1] = a[i] 
            a[i] = temp 
            i+=1
        i+=1
    return a
print(convertToWave([1,2,3,4,5],5))