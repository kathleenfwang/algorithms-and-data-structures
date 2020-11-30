class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None
class Tree:
    def __init__(self):
        self.root = None
    def add(self,data):
        node = Node(data)
        if (not self.root):
            self.root = node 
        else:
            # loop through and find first left space or right 
            que = [self.root] 
            while (len(que) > 0):
                current = que.pop() 
                if current.left:
                    que.append(current.left)
                else:
                    current.left = node 
                    return
                if current.right:
                    que.append(current.right)
                else:
                    current.right = node
                    return
    def print_tree(self):
        root = self.root
        def helper_print(root):
            print(root.data)
            if root.left:
                helper_print(root.left)
            if root.right:
                helper_print(root.right)
        helper_print(root)