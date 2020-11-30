def reverseInGroups(arr, n,k):
		# code here
		# reverse left and right sides until you get to end of array
	i = 0 
	while (i < n): 
		right = min(n-1,i+k-1)
		left = i 
		while (left < right):
		    arr[left],arr[right] = arr[right],arr[left]
		    right -=1
		    left+=1
		i = i + k 
	return arr