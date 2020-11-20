// Given a binary tree, return its level order traversal where the nodes in each level are ordered from left to right.

// Ex: Given the following tree...

//     4
//    / \
//   2   7
// return [[4], [2, 7]]
// return the children in a new [] 

function findTraversal(t) {
    let root = t.root
    let result = [[root.data]]
    let que = [root] 
    while (que.length > 0) {
        let temp = [] 
        // get all the children's children
        let count = que.length 
        while (count > 0){
            let node = que.shift() 
            if (node.left) {
                que.push(node.left)
                temp.push(node.left.data)
            }
            if (node.right) {
                que.push(node.right)
                temp.push(node.right.data)
            }
            count--
        }
         // add temp items to result 
         if (temp.length !== 0) result.push(temp)
    }
    return result 
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
let n1 = new Node(2)
n1.left = new Node(3)
n1.right = new Node(4)
let n2 = new Node(3)
n2.left = new Node(5) 
node.left = n1 
node.right = n2
t.root = node
console.log(findTraversal(t))