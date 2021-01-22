# given directions array containing NORTH EAST SOUTH WEST, remove the canceled out directions to output the final directions 

def valid_directions(arr):  
    dic = {"NORTH": "SOUTH", "SOUTH" : "NORTH", "WEST": "EAST", "EAST": "WEST"}
    stack = [] 
    for i in arr: 
        if len(stack) == 0:
            stack.append(i) 
        else: 
            prev = stack[len(stack) -1]
            if dic[i] == prev: 
                stack.pop()
            else:
                stack.append(i)
    return stack
 
arr = ["NORTH", "SOUTH", "EAST", "EAST", "SOUTH", "WEST", "EAST"]
print(valid_directions(arr))