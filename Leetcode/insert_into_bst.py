# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def insert_into_BST(root: TreeNode, val: int) -> TreeNode: 
    if not root:
        return TreeNode(val)
    def insert(node,node_val):
        if node_val.val < node.val: 
            if not node.left:
                node.left = node_val 
                return 
            insert(node.left,node_val)
        else:
            if not node.right:
                node.right = node_val
                return
            insert(node.right,node_val)
    insert(root, TreeNode(val))
    return root 
            

          