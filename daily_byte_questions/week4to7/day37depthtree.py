# Given a binary tree, return its maximum depth.
# Note: the maximum depth is defined as the number of nodes along the longest path from root node to leaf node.
#     5
#    / \
#   1  29
#     /  \
#    4   13
# return 3

# use bfs to count the levels 
import tree
def depth_tree(t):
    root = t.root 
    if (not root):
        return 0 
    que = [root] 
    depth = 1
    while (len(que) > 0):
        que_len = len(que)
        added = False
        for i in range(0,que_len):
            current = que.pop(0)
            if (current.left):
                if (not added):
                    added = True 
                    depth +=1 
                que.append(current.left)
            if (current.right):
                if (not added):
                    added = True 
                    depth +=1 
                que.append(current.right)
    return depth
    
def recursive_depth_tree(t):
    if (not t.root):
        return 0
    def helper_depth(root,count):
        if (not root):
            return count
        return max(helper_depth(root.left,count+1),(helper_depth(root.right,count+1)) )
    return helper_depth(t.root,0)
t = tree.Tree()
n1 = tree.Node(1)
t.root = n1 
n1.left = tree.Node(2)
n1.right = tree.Node(3)
n1.left.left = tree.Node(4)
n1.right.left = tree.Node(5)
n1.right.left.left = tree.Node(6)
print(depth_tree(t))
print(recursive_depth_tree(t))
     
