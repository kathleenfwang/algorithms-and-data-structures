arr = [1,3,5,8,10,2,0,5,7]
def find_min_max(arr): 
    min_num = float("inf")
    max_num = float("-inf")
    for i in arr: 
        min_num = min(min_num,i)
        max_num = max(max_num, i)
    return min_num,max_num
print(find_min_max(arr))