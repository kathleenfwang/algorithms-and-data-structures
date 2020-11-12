// print bst using DFs left -> root -> right 
class Node {
    constructor(value) {
        this.value = value 
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null 
    }
    add(value) {
        let node = new Node(value) 
        if (!this.head) {
            this.head = node 
            return
        }
        let current = this.head 
        while (current.next) {
            current = current.next
        }
        current.next = node 
        return
    }
    
}
class BSTNode {
    constructor(value) {
        this.value = value 
        this.left = null 
        this.right = null 
    }
}
class BST {
    constructor() {
        this.root = null 
    }
    add(value) {
        let node = new BSTNode(value) 
        let current = this.root
        if (!current) {
            this.root = node 
            return
        }
        // check to see if add on left or right 
        else {
            insertNode(current,node)
        }
    }
    insertNode(root,node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node 
                return
            }
            this.insertNode(root.left,node)
            
        }
        else {
            if (!root.right) {
                root.right = node 
                return 
            }
            this.insertNode(root.right,node)
        }
    }
}
function bstToLinkedList(bst) {
    let result = new LinkedList() 
    let root = bst.root 
    
    function dfs(root) {
        if (root.left) dfs(root.left)
        result.add(root.value) 
        if (root.right) dfs(root.right)
    } 
    return result 
}