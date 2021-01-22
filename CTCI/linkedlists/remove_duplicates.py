# 1 2 33 44 -> 1 2 
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

def remove_duplicates(head):
    result = slow = ListNode(0, next =head)
    while head:
        if head.next and head.val == head.next.val:
            while head.next and head.val == head.next.val:
                print("head:",head.val)
                head = head.next 
            print("slow:",slow.val)
            slow.next = head.next 
        else:
            slow = slow.next 
        head = head.next
    return result.next
result = remove_duplicates(n1)
while (result):
    print(result.val)
    result = result.next