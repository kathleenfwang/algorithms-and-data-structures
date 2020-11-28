def leaders(a):
    #Your code here
    # loop from end to beginning
    # unshift numbers that are greater than previous into result
    rightmost = a[len(a)-1]
    result = [rightmost]
    for i in range(len(a)-2,-1,-1):
        # compare the next number to the first number in result 
        # if the next is bigger, unshift 
        first = result[0] 
        if (a[i] >= first):
            result.insert(0,a[i])
    return result
s = '16 17 4 3 5 2'
arr = [int(x) for x in s.split()]
# print(leaders(arr))

# faster method: using stack with push/pop and then reversing array at the end 
def leaders2(a):
    #Your code here
    # loop from end to beginning
    # unshift numbers that are greater than previous into result
    rightmost = a[len(a)-1]
    result = [rightmost]
    for i in range(len(a)-2,-1,-1):
        # compare the next number to the first number in result 
        # if the next is bigger, unshift 
        last = len(result) -1
        if (a[i] >= result[last]):
            result.append(a[i])
    result.reverse()
    return result
print(leaders2(arr))