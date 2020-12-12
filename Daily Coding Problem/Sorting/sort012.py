def sort012(arr,n):
    # code here
    # loop through array 
    # if number is 0, move to beginning
    def sort_in_place(comp,start,ind,n):
        while (start<n):
            if (arr[start] == comp):
                temp = arr[start]
                first = arr[ind]
                arr[ind] =temp 
                arr[start] = first 
                ind+=1
            start+=1
        return ind  
    i = 0 
    ind_zero = 0 
    ind_one = sort_in_place(0,i,ind_zero,n) + 1
 
    # now sort from ind_zero + 1
    # find the 1s and move to beg(ind_zero + 1) 
    j = ind_one  
    sort_in_place(1,j, ind_one, n)
    return arr
str = "2 0 2 0 0 1 2 2 2 1 1 0 1 1 1 2 0 1 2 1 0 1 2 0 0 0 2 0 1 0 0 0 1 2 1 1 1 2 1 2 1 2 2 1 1 2 0 2 0 0 1 2 1 2 1 1 2 1 2 0 0 1 0 2 1 1 2 0 2 0 1 2 2 2 2 1 0 1 2 2 0 1 1 1 0 1 2 0 0 2 1 0 0 2 2 1 0 0 0 2 1 0 2 1 0 0 2 0 2 1 2 1 1 1 2 1 1 2 0 1 0 0 2 0 1 2 0 0 2 1 0 0 2 0 2 2 0 2 2 2 0 1 0 2 1 1 0 1 2 1 0 0 2 0 1 0 1 1 2 2 0 1 0 0 0 2 1 0 1 0 2 1 1 1 0 2 2 2 1 0 1 0 1 0 0 0 1 1 0 0 2 0 1 0 1 0 2 2 0 1 0 1 1 2 0 1 2 0 2 2 1 0 2 2 1 1 1 1 1 2 1 1 1 1 1 1 1 0 2 0 2 0 1 0 0 0 2 0 1 2 2 1 0 0 2 0 0 2 2 0 0 2 1 1 1 0 1 0 0 1 1 1 2 2 0 1 1 0 1 0 0 2 1 0 2 0 0 2 1 2 2 2 0 0 1 0 2 1 1 2 2 2 0 0 1 1 2 0 0 0 2 2 2 1 0 0 0 0 1 0 2 1 1 2 0 0 2 1 2 2 1 0 1 0 1 2 0 2 2 0 2 1 2 0 2 1 0 2 1 0 2 0 2 2 0 1 2 0 0 2 0 0 2 2 0 0 0 0 0 0 2 1 0 0 2 2 2 1 2 2 0 1 2 2 0 2 0 0 2 2 0 1 0 1 2 0 1 0 1 0 0 1 0 1 0 2 1 0 2 0 2 0 0 0 0 0 0 1 2 0 1 2 2 0 1 0 0 1 2 1 2 0 2 2 0 2 0 0 2 1 1 2 2 1 0 1 1 2 0 2 0 2 1 2 2 2 0 1 0 2 0 0 2 1 0 1 2 1 2 0 0 2 1 0 0 1 0 2 2 0 1 1 0 2 2 0 2 0 2 0 0 2 2 1 2 1 2 0 0 1 1 1 2 1 0 0 2 2 2 0 0 2 2 2 1 1 0 1 2 1 2 0 2 1 1 2 2 1 1 1 0 1 2 2 0 0 1 1 0 2 2 1 0 0 2 1 2 2 0 2 2 1 2 2 2 2 1 2 1 2 0 1 0 1 0 0 2 1 2 2 1 1 2 0 0 1 1 0 0 2 1 0 1 1 2 1 0"
arr = str.split(" ")
for i in range(0,len(arr)):
    arr[i] = int(arr[i])

print(sort012(arr, len(arr)))