// Given a binary tree, return the largest value in each of its levels. Ex: Given the following tree…

//     2
//    / \
//   10  15
//         \
//          20
// return [2, 15, 20]
// Ex: Given the following tree…

//           1
//          / \
//         5   6
//        / \   \  
//       5   3   7 
// return [1, 6, 7]

function largestValue(t) {
    let root = t.root 
    if (!root) return null 
    let result = [root.data] 
    let que = [root] 
    while (que.length > 0 ) {
        // want to initialize new max each level 
        let max = -Infinity 
        let queLen = que.length 
        for (let i =0;i<queLen;i++) {
            let current = que.shift() 
            if (current.left) {
                max = Math.max(max,current.left.data)
                que.push(current.left)
            }
            if (current.right) {
                max = Math.max(max,current.right.data)
                que.push(current.right)
            }

        } 
        if (max !== -Infinity) result.push(max) 

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
//4  7   8 -> [1,5,8]
console.log(largestValue(t)) // [1,5,8]