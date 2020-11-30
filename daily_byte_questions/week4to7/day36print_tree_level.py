# print tree like: [[1],[2,3],[3,4,5]]
import tree
def print_tree(t):
    head = t.root 
    result = [[head.data]]
    if (not head):
        return result 
    que = [head] 
    while (len(que) > 0):
        new_row = [] 
        que_len = len(que)
        for i in range(0,que_len):
            current = que.pop(0) 
            if current.left:
                que.append(current.left)
                new_row.append(current.left.data) 
            if current.right:
                que.append(current.right)
                new_row.append(current.right.data)
        if len(new_row) > 0:
            result.append(new_row)
    return result
t = tree.Tree()
n1 = tree.Node(1)
t.root = n1 
n1.left = tree.Node(2)
n1.right = tree.Node(3)
n1.left.left = tree.Node(4)
n1.right.left = tree.Node(5)
 
print(print_tree(t))