def helper_add(node,total_sum):
    if not node:
        return 
    total_sum[0] += node.data 
    helper_add(node.left,total_sum)
    helper_add(node.right,total_sum)
    return total_sum[0]
    
def isSumTree(node):
    if not node:
        return True 
    return helper_add(node.left,[0]) + helper_add(node.right,[0]) == node.data