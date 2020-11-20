// Given a binary search tree, return the minimum difference between any two nodes in the tree.

// Ex: Given the following tree...
//         2
//        / \
//       3   1
// return 1.
// Ex: Given the following tree...
//         29
//        /  \
//      17   50
//     /     / \
//    1    42  59
class Node {
    constructor(data) {
        this.data = data
        this.left = null 
        this.right = null 
    }
}
class Tree {
    constructor() {
        this.root = null 
    }
    add(item) {
        let node =new Node(item) 
        if (!this.root)  {
            this.root = node
            return
        }
        // find the next empty left/right 
        // start at left 
        let root = this.root
        let que = [root]
        while (que.length > 0) {
            let root = que.shift() 
            if (!root.left) return root.left = node 
            else {
                que.push(root.left)
            }
            if (!root.right) {
                return root.right = node 
            }
            else {
                que.push(root.right)
            }
        }
    }
    print() {
        let current = this.root 
        function inOrder(root) {
            console.log(root.data)
            if (root.left) inOrder(root.left)
            if (root.right) inOrder(root.right)
        }
        inOrder(current)
    }
    printBFS() {
        let current = this.root
        let que = [current] 
        while (que.length > 0){
            current = que.shift() 
            console.log(current.data)
            if (current.left) que.push(current.left)
            if (current.right) que.push(current.right)
        }
    }
}
function minDiff(tree) {
    let root = tree.root 
    let que = [root]
    let min = Infinity
    while (que.length > 0) {
        root = que.shift()
        if (root.left) {
            let diff = findDiff(root,root.left)
            min = Math.min(min,diff)
            que.push(root.left)
        }
        if (root.right) {
            let diff = findDiff(root,root.right)
            min = Math.min(min,diff)
            que.push(root.right)
        }
    }
    return min 
}

function findDiff(root,child) {
    console.log(root.data,child.data)
    return Math.abs(root.data - child.data)
}

let t = new Tree()
t.add(1)
t.add(2)
t.add(3)
t.add(4) 
t.add(5) 
 
console.log(minDiff(t))