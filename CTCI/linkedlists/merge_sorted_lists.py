import list

def merge_sorted_lists(l1,l2):
    root1 = l1.root 
    root2 = l2.root 
    new_list = list.Linked_List()
    if (not root1 or not root2):
        return None
    # iterate over lists
    while root1 and root2:
        if root1.data < root2.data:
            new_list.add(root1.data)
            root1 = root1.next
        else: 
            new_list.add(root2.data)
            root2 = root2.next
         
    # add remaining elements onto new list (if any)
    if (not root1 and not root2):
        return new_list
    else:
        if root1:
            helper_add(root1,new_list)
        else:
            helper_add(root2,new_list)
    return new_list
    
def helper_add(root,list):
    while (root):
        list.add(root.data)
        root = root.next 
    return list

l1 = list.Linked_List()
l2 = list.Linked_List()
for i in range(1,6,2): # 1,3,5
    l1.add(i)
for i in range(2,7,2): # 2,4,6
    l2.add(i)

def run():
    merge_sorted_lists(l1,l2).print()