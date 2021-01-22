class Node: 
    def __init__(self,data,next = None):
        self.data = data
        self.next = next
    def print(self):
        node = self 
        while node:
            print(node.data)
            node = node.next 
n = Node(1)
n.next = Node(2)
n.next.next = Node(3)
n.next.next.next = Node(4)