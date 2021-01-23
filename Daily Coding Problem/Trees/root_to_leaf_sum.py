class Node:
    def __init__(self,val):
        self.data = val
        self.left = None
        self.right = None

def hasPathSum(node, S):
    '''
    :param root: root of given tree.
    :param sm: root to leaf sum
    :return: true or false
    '''
    # code here
    if not node:
        return s == 0
    ans = False 
    subSum = S - node.data # want to check if subSum == node.left or node.right
    if subSum == 0 and not node.left and not node.right:
        return True 
    else:
        if node.left:
            ans = ans or hasPathSum(node.left, subSum)
        if node.right:
            ans = ans or hasPathSum(node.right,subSum)
    return ans
n = Node(52)
n.left = Node(10)
n.right = Node(30)

print(hasPathSum(n, 62))