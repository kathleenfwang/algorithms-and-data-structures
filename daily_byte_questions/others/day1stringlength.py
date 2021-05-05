# Given a string, s, return the length of the last word.
# Note: You may not use any sort of split() method.

# Ex: Given the following string…

# s = "The Daily Byte", return 4 (because "Byte" is four characters long).

def lastStringLength(str): 
    # loop through string until you find the index of  last "space" 
    # everytime you see a space, update the index to be current space 
    # subtract length - index of space 

    current_space = 0 
    for i in range(len(str)): 
        if str[i] == " ": 
            current_space = i 
    return len(str) - current_space - 1 

strs = ["The Daily Byte", "Happy Frog", " Happy"] 

for i in strs: 
    print(lastStringLength(i)) # 4 4, 5 

# Given a string s, reverse the words.
# Note: You may assume that there are no leading or trailing whitespaces and each word within s is only separated by a single whitespace.

# Ex: Given the following string s…

# s = "The Daily Byte", return "Byte Daily The".

def reverseWords(str): 
    # split string into array 
    # reverse the array 
    # return array as a string
    arr = str.split(" ") # "the, daily, .." 
    mid = len(arr) // 2 
    for i in range(mid): 
        temp = arr[i] 
        arr[i] = arr[len(arr) - 1 - i] 
        arr[len(arr) - 1 - i]  = temp 
    return " ".join(arr)

s = "The Daily Byte"
print(reverseWords(s)) # "Byte Daily The" 

# Given an integer array nums, return an array where each element i represents the product of all values in nums excluding nums[i].
# Note: You may assume the product of all numbers within nums can safely fit within an integer range.

# Ex: Given the following array nums…

# nums = [1, 2, 3], return [6,3,2].
# 6 = 3 * 2 (we exclude 1)
# 3 = 3 * 1 (we exclude 2)
# 2 = 2 * 1 (we exclude 3)

def productNums(arr): 
    products = [] 
    for i in range(len(nums)): 
        product = 1 
        for j in range(len(nums)): 
            if j != i: 
                product *= nums[j]
        products.append(product)

    return products 


nums = [1, 2, 3,3]
nums = [0,6,2,1]
print(productNums(nums)) # [6,3,2,2]

def canSumTab(arr,sum): 
    dp = [False] * (len(arr) +1) 
    dp[0] = True 
    for i in range(1,len(arr) +1): 
        if dp[i-1] == True: 
            for num in arr: 
                if num == sum:
                    return True 
                if num + i > sum: 
                    break 
                if num < sum: 
                    dp[i-1+num] = True 

    return dp[len(arr)] 

arr = [7,3,1]
sum = 8 
print(canSumTab(arr,sum))