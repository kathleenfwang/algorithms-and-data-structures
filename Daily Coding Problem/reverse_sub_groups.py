def reverseInGroups(arr,k):
	# code here
	count = 0 
	i = 0 
	while (i < len(arr)):
		for j in range(0,k//2): 
		    try:
                temp = arr[j+i]
                last = arr[i+k-1] 
		        arr[j+i] = last 
		        arr[i+k-1] = temp 
            except:
                temp = arr[j+i]
                last = arr[len(arr)-1] 
		        arr[j+i] = last 
		        arr[len(arr)-1] = temp 
		count+=1 
		i = count * k
	return arr
arr = [1,2,3,4,5]
print(reverseInGroups(arr,3))