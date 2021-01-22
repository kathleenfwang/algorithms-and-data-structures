import Node 
# complete this function
# return head of list after swapping

def pairWiseSwap(head):
    # code here
    # loop through list 
    # store current in temp variable
    # current = current.next 
    # current.next = temp current 
    # 1 2 3 4 -> 2 1 4 3 
    result = head
    while head and head.next:

        next_val = head.next.next  # 3 
        temp = Node.Node(head.data) # 1 
        head = head.next  # 2 
        result.next = temp 
        head = next_val 
    return result 
 
pairWiseSwap(Node.n).print()