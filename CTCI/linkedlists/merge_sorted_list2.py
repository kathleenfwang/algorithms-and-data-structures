# create two pointers at heads of linked lists 
# compare pointers and copy smaller into new linked list 
# move the pointer at whichever list is smaller 
# continue until you reach the end of one linked list 
# then add the remaining elements from the other linked list into result 

import list

def merge_sorted_lists(l1,l2): 
    node1 = l1.root
    node2 = l2.root
    if (not node1 and not node2):
        return null 
    result = list.Linked_List()
    while (node1 and node2): 
        if (node1.data < node2.data):
            result.add(node1.data)
            node1 = node1.next 
        else:
            result.add(node2.data)
            node2 = node2.next 
    # add remaining lists onto result 
    if (node1):
        while (node1):
            result.add(node1.data)
            node1 = node1.next
    else:
        while (node2):
            result.add(node2.data)
            node2 = node2.next
    return result 
l1 = list.Linked_List()
l2 = list.Linked_List()

for i in range(0,5,2): # 0,2,4
    l1.add(i)
for i in range(1,6,2): # 1,3,5
    l2.add(i)
result = merge_sorted_lists(l1,l2)
result.print_list()
 