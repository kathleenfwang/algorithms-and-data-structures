# create two pointers at heads of linked lists 
# compare pointers and copy smaller into new linked list 
# move the pointer at whichever list is smaller 
# continue until you reach the end of one linked list 
# then add the remaining elements from the other linked list into result 

class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val 
        self.next = next 
def print_list(nodeList):
    while (nodeList):
        print(nodeList.val)
        nodeList = nodeList.next
def merge_sorted_lists(l1,l2):
    dummy = result = ListNode()
 
    if (not l1  and not l2):
        return None 
    while (l1 and l2):
        if l1.val < l2.val:
            result.next = ListNode(l1.val)
            l1 = l1.next
        else:
            result.next = ListNode(l2.val)
            l2 = l2.next
        result = result.next
    print_list(result)
    print("**************")
    if (l1): result.next = l1
    else: result.next = l2
    return dummy.next
n1 = ListNode(1)
n2 = ListNode(2)
n1.next = n2 

n3 = ListNode(3)
n4 = ListNode(4)
n3.next = n4 

result = (merge_sorted_lists(n1,n3))
print_list(result)