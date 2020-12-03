# [1,2,3,4,5],2 -> [[1,2],[3,4],[5]] 

def group_sub_arr(list,size):
    result = [] 
    i = 0
    while (i < len(list)): 
        new_row = []
        last = size + i if size + i <= len(list) else len(list)
        for j in range(i,last):
            new_row.append(list[j])
        result.append(new_row)
        i += size 
    return result
list= [1,2,3,4,5]
print(group_sub_arr(list,2))