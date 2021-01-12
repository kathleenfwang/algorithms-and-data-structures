# 1 22 3 4 -> 1 2 3 4 

class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val 
        self.next = next 
n1 = ListNode(1)
n2 = ListNode(2)
n1.next = n2 
n3 = ListNode(2)
n4 = ListNode(3)
n5 = ListNode(3)
n6 = ListNode(4)

n3.next = n4 
n4.next = n5 
n5.next = n6
n2.next = n3 # 1224 -> 14 

def all_unique(head):
    result = dummy = ListNode(0, next = head)
    while head: 
        if head.next and head.val == head.next.val: 
           
            while (head.next and head.val == head.next.val):
                head = head.next 
            # moving the dummy counter
        dummy = dummy.next
        head = head.next 
    return result.next 

result = all_unique(n1) 
while (result):
    print(result.val)
    result = result.next