class Node:
    def __init__(self,val):
        self.data = val
        self.left = None
        self.right = None
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
            if not root.left:
                root.left = n 
                return root
            if not root.right:
                root.right = n 
                return root
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
t.add(1)
t.add(2)
t.add(3)
 
def countLeaves(root):
    # Code here
    count = [0]
    def helperCountLeaves(root,count):
        if not root.left and not root.right:
            count[0]+=1
            print(count)
            return count 
        if root.left:
            helperCountLeaves(root.left,count)
        if root.right:
            helperCountLeaves(root.right,count)
    
    helperCountLeaves(root,count)
    return count[0]

print(countLeaves(t.root))