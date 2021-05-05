# Given an array nums, return the third largest (distinct) value.
# Note: If the third largest number does not exist, return the largest value.


# Ex: Given the following array nums…

# nums = [1, 4, 2, 3, 5], return 3.
# Ex: Given the following array nums…

# nums = [2,3, 3, 5], return 2.


# find max of array 
# pop off, find next max 
# pop off, find 3rd max 
# if the second max and 3rd max are the same, return first max 
 
def thirdLargestNums(arr): 
    _set = set(arr) 
    sorted_set = sorted(_set,reverse=True)
    if len(sorted_set) < 3: 
        return sorted_set[0] 
    return sorted_set[2]

 
arrs = [[3,2,2],[2,3, 3, 5],[1, 4, 2, 3, 5]]
for arr in arrs:
    print(thirdLargestNums(arr))

user = [{"name": "Dough", "age": 55}, 
    {"name": "Ben", "age": 55}, 
    {"name": "Citrus", "age": 33},
    {"name": "Abdullah", "age":55},
    ]
test = sorted(user,key = lambda x: (x["age"]))
print(test) # sorted by name - abdullah, ben etc 

def findAllSubarrays(arr): 
  
    
    def helper(arr): 
        if len(arr) == 0:
            return [[]] 
        result = [] 
        for i in range(len(arr)): 
            paths = findAllSubarrays(arr[i+1:]) 
 
            for path in paths: 
                result.append([arr[i], *path])
 

        return result 

    return helper(arr[:-1]) 
    return result

     

     
arr = [1,2,3,4,5]
# print(findAllSubarrays(arr)) 
# [[3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]] 

# def printArray(arr,i,j): 
#     result = [] 
#     for i in range(i,j): 
#         result.append(arr[i])
#     return result 

def findAllSubarray2(arr): 
    result = []
    for i in range(len(arr)+1): 
        for j in range(i,len(arr)+1): 
            path = []
            for x in range(i,j): 
                path.append(arr[x]) 
            path and result.append(path)
      

    return result 
arr = [1,2,3,4]
print(findAllSubarray2(arr)) 

# Your previous Plain Text content is preserved below:
# 
# Given a integer as a input, replace all the ‘0’ digits with a ‘5’, and return the integer.
# 
# Examples:
# 
#     102 ==> 152
#     1020 ==> 1525



"""
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Input: 
 - nums = [1,3,2,2,5,2,3,7]
Output: 5 ([3,2,2,2,3,4])
""" 