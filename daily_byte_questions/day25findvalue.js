// Given the reference to the root of a binary search tree and a search value, return the reference to the node that contains the value if it exists and null otherwise.
// Note: all values in the binary search tree will be unique.

// Ex: Given the tree...

//         3
//        / \
//       1   4
// and the search value 1 return a reference to the node containing 1, return a node 

function findValue(root,search) {
    // this is just a DFS and return when you get to the node or when there is no more leaves   
    if (root.data === search) return root 
    if (root.left) findValue(root.left,search)
    if (root.right) findValue(root.right,search)
    return null  
}