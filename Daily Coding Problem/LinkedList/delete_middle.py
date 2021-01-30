import Node 
def deleteMid(head):
    '''
    head:  head of given linkedList
    return: head of resultant llist
    '''
    #code here
    # find length of list 
    # the middle index will be length // 2 
    # loop through list until next is middle index 
    # current next = next next 
    if not head or not head.next:
        return None 
    list_len = 0 
    # we need to set two pointers to head because the first pointer is to traverse through and find the length 
    # second is to modify the list, but the original head needs to not be changed because we are returning it 
    current = temp = head 
    while temp:
        list_len +=1 
        temp = temp.next 
    middle_index = list_len // 2 
    count = 0 
 
    while current: 
        if count + 1 == middle_index: 
            current.next = current.next.next 
            return head
        current = current.next
        count+=1 
def delete_mid_pointers(head): 
    slow = head
    fast = head 
    # fast = head.next.next 
    # once fast.next = null, we at the end,
 
deleteMid(Node.n).print()