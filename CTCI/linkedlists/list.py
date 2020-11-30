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
    def remove(self,ind):
        if ind == 1:
            if (not self.root):
                return 
            else:
                next = self.root.next 
                self.root = next 
        else:
            # previous node (node before ind) will now point to ind next 
            root = self.root 
            prev = root 
            i = 1 
            while (i < ind):
                if (not root.next and root.next.next):
                    return 
                else:
                    prev = root 
                    root = root.next.next  
                i+=1
            prev.next = root 
            return

    def print_list(self):
        root = self.root
        while (root):
            print(root.data)
            root = root.next
