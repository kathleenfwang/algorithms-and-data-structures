// Given a binary tree return all the values you’d be able to see if you were standing on the left side of it with values ordered from top to bottom.

// Ex: Given the following tree…

// -->    4
//       / \
// -->  2   7
// return [4, 2]
// Ex: Given the following tree…

// -->        7
//          /  \
// -->     4     9
//        / \   / \
// -->   1   4 8   9
//                  \
// -->               9
// return [7, 4, 1, 9]

function visibleValues(t) {
    let root = t.root 
    if (!root) return null 
    let result = [root.data]
    let que = [root] 
    while (que.length > 0) {

    }
    return result 
}
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
}

let t = new Tree() 

let node1 = new Node(1)
let node2 = new Node(3) 
t.root = node1 
node1.left = node2 
node1.right = new Node(5) 
node1.right.right = new Node(8)
node2.left = new Node(4)
node2.right = new Node(7)
// tree: 
//   1 
//  3   5
//4  7   8 -> [1,3,4]
console.log(visibleValues(t))  