# [ 1 2 3]
# [ 2 4 5] 
# [ 3 6 8] 
import list 
def add_two_nums(l1,l2):
    result = list.Linked_List()
    head1 =  l1.root
    head2 = l2.root
    carry_dataue = 0 
    while head1 and head2: 
        sum_data = head1.data + head2.data + carry_dataue 
        if sum_data >= 10: 
            result.add((sum_data) % 10)
            carry_dataue = sum_data / 10 
        else:
           result.add(sum_data)
        head1 = head1.next
        head2 = head2.next
    return result 
l1 = list.Linked_List() 

for i in range(1,6,2): # 135
    l1.add(i)
l2 = list.Linked_List() 
for i in range(1,4): # 123
    l2.add(i)
 
add_two_nums(l1,l2).print_list()


