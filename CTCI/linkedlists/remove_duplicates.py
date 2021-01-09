# 1 2 33 44 -> 1 2 
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val 
        self.next = next 
n1 = ListNode(2)
n2 = ListNode(2)
n1.next = n2 
n3 = ListNode(2)
n4 = ListNode(4)
n3.next = n4 
n2.next = n3 # 1224 -> 14 

def remove_duplicates(head):
    dummy = ListNode(0,next = head)
    slow = dummy
    while (head):
        if (head.next and head.val == head.next.val):
            # means they are the same and we have to point to the next non duplicating 
            while (head.next and head.val == head.next.val):
                head = head.next 
            # now we want slow to point to the next after the duplicates
            slow.next = head.next
        else:
            slow = slow.next
        head = head.next 
    return dummy.next 
result = remove_duplicates(n1)
while (result):
    print(result.val)
    result = result.next