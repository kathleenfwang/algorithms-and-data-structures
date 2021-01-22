"""   
class Node:
    def __init__(self, data):
		self.data = data
		self.next = None
  This is method only submission.
  You only need to complete the method.
"""
def count(head, search_for):
    # Code here
    count = 0 
    if not head: return 0 
    while head:
        if head.data == search_for:
            count+=1
        head = head.next 
    return count