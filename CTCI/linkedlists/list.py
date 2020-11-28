class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class Linked_List:
    def __init__(self):
        self.root = None
    def add(self,data):
        node = Node(data) 
        if (not self.root):
            self.root = node 
        else:
            root = self.root 
            while (root.next):
                root = root.next
            root.next = node
    def print(self):
        root = self.root
        while (root):
            print(root.data)
            root = root.next
