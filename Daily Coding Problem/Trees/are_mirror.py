def are_mirror(root1,root2):
    if not root1 and not root2:
        return True
    if not root1 or not root2:
        return False 
    return root1.data == root2.data and are_mirror(root1.right,root2.left) and are_mirror(root1.left,root2.right)