import Node 
def reverseList(node): 
    # have a new head point to None 
    # loop through node
    # create a new node to store current value 
    # new node points to prev 
    # udpate prev to = new node 
    prev = None 
    while node:
        new_node = Node.Node(node.data)
        new_node.next = prev 
        prev = new_node 
        node = node.next 
    return prev 

n = Node.n
reverseList(n).print()