def count_leaves(root):
    if not root:
        return 0 
    count = 0 
    head = root 
    que = [head]
    while len(que):
        current = que.pop(0)
        if current.left:
            que.append(current.left)
        if current.right:
            que.append(current.right)
        if not current.left and not current.right:
            count+=1 
    return count 