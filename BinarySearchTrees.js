class Node{
    constructor(data,left = null,right = null) {
        this.data = data;
        this.left = left; 
        this.right = right; 
    }
}

class BST {
    constructor() {
        this.root = null; 
    }
	viewNode(node, head = this.head) {
		let queue = [] 
		if (node == head) {
			return head
		}
		
		if (node < head ) {
			head = head.left 
			viewNode(node, head)
		}
		
		else if (node > head ) {
			head = head.right
			viewNode(node,head)
		}

		else {
			queue.push(node)
			let left = node.left
			let right = node.right
			if (!left && !right) {
				return queue 
			}
			else if (left && !right) {
				queue.push(left)
				return queue 
			}
			else if (right && !left) {
				queue.push(right)
				return queue 
			}
			else {
				// node has 2 children 

				viewChildren(node,queue)
				return queue 

			}
		}
	}
	viewChildren(node,queue) {
		// node has 2 children
		let left = node.left
		let right = node.right

		while(left && right) {
			queue.push(left)
			queue.push(right)
			left = left.left
			right = right.right 
			if (!left && !right) {
				return queue 
			}
			if (!left) {
				left = '-'
			}
			if (!right) {
				right = '-'
			}
		}
	}
    add(data) {

        let node = this.root; 
        let item = new Node(data)

         if (!node) {
            
            return this.root = item; 
        }

        this.insertNode(node,item);
        return this;

    }

    insertNode(node,item) {
        // check to add on left or right and only stick to one branch. 
        if (item.data < node.data) {
            if (!node.left) return node.left = item 

            node = node.left

            //call the function again, with the new node left. 

            this.insertNode(node,item)


        }
        //add to the right side 
        else {
            if (!node.right) return node.right = item 
            
            node = node.right
            this.insertNode(node,item)
        }
    }

 
// helper method that calls the 
// removeNode with a given data 
	remove(data) 
	{ 
	// root is re-initialized with 
	// root of a modified tree. 
    
	this.root = this.removeNode(this.root, data); 
    
	} 

	removeNode(node, key) 
	{ 
		
	// if the root is null then tree is empty 

	if(node === null) 
		return null; 

	// if data to be delete is less than 
	// roots data then move to left subtree 
	else if(key < node.data) 
	{ 
		node.left = this.removeNode(node.left, key); 
		return node; 
	} 

	// if data to be delete is greater than 
	// roots data then move to right subtree 
	else if(key > node.data) 
	{ 
		node.right = this.removeNode(node.right, key);   
        return node; 
		
	} 

	// if data is similar to the root's data 
	// then delete this node 
	else
	{ 
		if (key !== node.data) {
			return 'no node with this value!'
		}

		// deleting node with no children 
		if(node.left === null && node.right === null) 
		{ 
			console.log('last node: ', node)  
			node = null; 
			return node; 
		} 

		// deleting node with one children 
		if(node.left === null) 
		{ 
			node = node.right; 
			return node; 
		} 
		
		else if(node.right === null) 
		{ 
			node = node.left; 
			return node; 
		}
	

		// Deleting node with two children 
	
		node = node.left
		node.left = null; 
		return node; 
	

	}    

	}


	breathFirstSearch() {
    	let node = this.root; 
    	let data = []; 
    	let queue = []; 

    	queue.push(node); 
    	while(queue.length) {
            
        node = queue.shift(); 
        data.push(node.data); 
        if(node.left) queue.push(node.left); 
        if (node.right) queue.push(node.right); 
             
        }
        return data; 
    }
    
	
}

let bst1 = new BST()
bst1.add(100)
bst1.add(50)
bst1.add(90)
bst1.add(110)
bst1.add(30)
bst1.viewNode(50)
bst1

