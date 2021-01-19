class Node: 
    def __init__(self,data,next = None):
        self.data = data
        self.next = next
    def print(self):
        node = self 
        while node:
            print(node.data)
            node = node.next 
def reverseList(node): 
    # have a new head point to None 
    # loop through node
    # create a new node to store current value 
    # new node points to prev 
    # udpate prev to = new node 
    prev = None 
    while node:
        new_node = Node(node.data)
        new_node.next = prev 
        prev = new_node 
        node = node.next 
    return prev 
n = Node(1)
n.next = Node(2)
n.next.next = Node(3)

reverseList(n).print()