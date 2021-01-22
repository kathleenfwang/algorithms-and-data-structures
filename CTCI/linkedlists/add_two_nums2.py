class ListNode: 
    def __init__(self,val=0,next=None):
        self.val = val 
        self.next = next
def add_two_nums(l1,l2):
    dummy = result = ListNode() 
    carry_over = 0
    while l1 or l2: 
        total_val = carry_over
        if l1 and l2: 
            total_val += l1.val + l2.val
            l1 = l1.next
            l2 = l2.next
        elif l1:
            total_val += l1.val
            l1 = l1.next
        else:
            total_val +=l2.val
            l2 = l2.next
        carry_over = total_val // 10 
        result.next = ListNode(total_val%10)
        result = result.next
    if carry_over > 0: result.next = ListNode(carry_over)
    return dummy.next

l1 = ListNode(0)
l1.val = 3 
print(l1.val)