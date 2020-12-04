# -*- coding: utf-8 -*-
# Given a binary tree, return a list of strings containing all root to leaf paths.
# Ex: Given the following tree…

#    1
#  /   \
# 2     3
# return ["1->2", "1->3"]
# Ex: Given the following tree…

#     8
#    / \
#   2  29
#     /  \
#    3    9
# return ["8->2", "8->29->3", "8->29->9"]
# use DFSF 
# make array of root to children [8,2], [8,29,3], then join to string with "->"
import tree
def root_to_children(t):
    real_root = t.root 
    if (not real_root):
        return None 
    result = [] 
 
    def helper(root,new_row):
        new_row.append(root.data)
        if (root.left):
            helper(root.left,new_row)
        result.append(new_row)
        new_row = [real_root.data]
        if (root.right):
            print('hi')
            helper(root.right,new_row)
        result.append(new_row)
        new_row = [real_root.data]
        
    helper(real_root,[])
    return result 
t = tree.Tree()
n1 = tree.Node(1)
t.root = n1 
n1.left = tree.Node(2)
n1.right = tree.Node(3)
n1.left.left = tree.Node(4)
n1.right.left = tree.Node(5)
n1.right.left.left = tree.Node(6)
print(root_to_children(t))