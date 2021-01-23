def countLeaves(root):
    # Code here
    head = root
    count = 0 
    if not head:
        return 0
    que = [head]
    while len(que):
        # goal is toget to end of tree 
        current = que.pop(0) 
        if current.left:
            que.append(current.left)
        if current.right:
            que.append(current.right)
        if not current.left and not current.right:
            # we are counting the number of childless nodes 
            count+=1
    return count