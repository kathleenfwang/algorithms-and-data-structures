# if there is a left child, add to the result 
class Node():
    def __init__(self,data,left = None,right = None):
        self.data = data
        self.left = left 
        self.right = right
class Tree():
    def __init__(self,root = None):
        self.root = root 
    def add(self,data): 
        n = Node(data)
        if not self.root: 
            self.root = n
            return 
        head = self.root
        def helper(root):
            if not root:
                root = n 
                return
            helper(root.left)
            helper(root.right)
        helper(head)
    def print(self):
        def helper(root):
            if not root: 
                return 
            print(root.data)
            helper(root.left)
            helper(root.right)
        helper(self.root) 

t = Tree() 
n = Node(1) 
n.left = Node(2) 
n.right = Node(3) 
t.root = n 
t.add(3)
t.print()
def sum_left_trees(root,sum):
    if root.left: 
        sum+= root.left.data
    else:
        return
    sum_left_trees(root.left,sum)
    sum_left_trees(root.right,sum)
    return sum 

# print(sum_left_trees(t,0))