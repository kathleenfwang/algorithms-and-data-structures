
import tree
def recursive_visible_values(t):
    if (not t.root):
        return [] 
    result = [] 
    def helper_visible(root,result):
      
        if (not root):
            return result 
        result.append(root.data)
        if (root.left):
            root = root.left 
        elif root.right:
            root = root.right 
        else:
            root = root.left
        return helper_visible(root, result)
    return helper_visible(t.root,result)
t = tree.Tree()
n1 = tree.Node(1)
t.root = n1 
n1.left = tree.Node(2)
n1.right = tree.Node(3)
n1.left.left = tree.Node(4)
n1.right.left = tree.Node(5)
n1.right.left.left = tree.Node(6)
print(recursive_visible_values(t))
