def all_binary_nums(nums,index,count):
    if index == len(nums):
        count[0]+=1
        return count 
    if nums[index] == "?": 
        for char in "01":
            nums[index] = char 
            all_binary_nums(nums,index+1,count)
            # back track and replace changes back to original "?"
            nums[index] = "?"
    else: 
        # move onto the next index 
        all_binary_nums(nums,index+1,count)
    return count[0]
nums = "1?1?"  # 1111 1110 1011 1010 
 # nums = "1?01?00?1?"
print(all_binary_nums(list(nums),0,[0]))