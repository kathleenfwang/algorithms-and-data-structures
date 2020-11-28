import list
def rotate_list(list,k):
    root = list.root
    if(not root):
        return None 
    fast = list.root
    slow = list.root 
    # fast should start at list length - k 
    for i in range(0,k):
        fast = fast.next 
    # the new tail is at list length - k 
    while (fast.next):
        fast = fast.next 
        slow = slow.next 
    # new head is slow.next value 
    new_head = slow.next
    # new tail is slow.next  
    slow.next = None
    # fast.next now points to old head 
    fast.next = root 
    # set new head 
    list.root = new_head 
    return list 

l = list.Linked_List()
for i in range(1,6):
    l.add(i)
def run():
    rotate_list(l,2).print() # 4 5 1 2 3 