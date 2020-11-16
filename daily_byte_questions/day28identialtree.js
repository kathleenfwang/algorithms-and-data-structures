// 2
// / \
// 1   3
// 2
// / \
// 1   3

// return true.
function identicalTrees(root1,root2) {
    // if both are null return true 
    if (!root1 && !root2) return true 
    // if either one of the roots are null or their data is different return false 
    if (!root1 || !root2 || root1.data !== root2.data) {
        return false
    }
         return identicalTrees(root1.left,root2.left) && identicalTrees(root1.right,root2.right)
}

class Node {
    constructor(data) {
        this.data = data 
        this.left = null 
        this.right = null 
    }
}

class BT {
    constructor() {
        this.root = null 
    }
}

let b1 = new BT() 
let n1 = new Node(1)
n1.left = new Node(2)
n1.right = new Node(3) 
b1.root = n1 
let b2 = new BT() 
let n2 = new Node(1)
n2.left = new Node(3)
n2.right = new Node(2)
n2.right.right = new Node(5)
b2.root = n1

console.log(identicalTrees(b1.root,b2.root))
