def equilibriumPoint(a,n):
    # Your code here
    if n == 1:
        return 1
    left = 0 
    right = 0
    # initialize right side
    for i in range(1,n):
        right += a[i] 
    # loop until the end 
    for j in range(1,n):
        left += a[j-1]
        right -= a[j] 
        if left == right:
            return j + 1 
    return -1
a = [1,3,5,2,2]
print(equilibriumPoint(a,len(a)))