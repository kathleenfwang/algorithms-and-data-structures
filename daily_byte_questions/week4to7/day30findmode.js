// Given a binary search tree, return its mode (you may assume the answer is unique). If the tree is empty, return -1. Note: the mode is the most frequently occurring value in the tree.

// Ex: Given the following tree...

//         2
//        / \
//       1   2
// return 2.
// store key values in obj, and keep a max value 
// loop over tree dfs 
function findMode(t) {
    let obj = {} 
    let max = -Infinity
    let val  = -1 
    search(t.root)
    function search(root) {
        if (obj[root.data]) {
            obj[root.data]+=1
            if (obj[root.data] > max) {
                val = root.data
            }
            max = Math.max(max,obj[root.data])
        }
        else {
            obj[root.data] = 1 
        }
        if (root.left) search(root.left) 
        if (root.right) search(root.right)
    }
    return val
}

class Node {
    constructor(data) {
        this.data = data
        this.left = null 
        this.right =null 
    }
}
class Tree {
    constructor() {
        this.root = null 
    }
}
let t = new Tree() 
let node = new Node(1)
node.left = new Node(4)
node.right = new Node(4)
t.root = node
console.log(findMode(t))