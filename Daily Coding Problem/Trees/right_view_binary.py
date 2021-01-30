def right_view_helper(node,max_level,level,result):
    if not node:
        return 
    if max_level[0] < level: 
        result.append(node.data)
        max_level[0] = level 
    level+=1 
    right_view_helper(node.right,max_level,level,result)
    right_view_helper(node.left,max_level,level,result)
    
def right_view(node):
    if not node:
        return []
    result = [] 
    max_level = [0] 
    level = 1 
    right_view_helper(node,max_level,level,result)
    return result