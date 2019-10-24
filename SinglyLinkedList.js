class Node {
    constructor(data){ 
        this.data = data; 
        this.next = null; 
        this.prev = null;

    }
}

class Singly {
    constructor() {
        this.head = null; 
        this.tail = null; 
    }
    print() {
        let node = this.head; 
        if (!this.head) return; 

        while(node.next) {
            console.log(node)
            node = node.next; 
        }
        console.log(node)
        return; 
    }
    push(data) {
        let node = new Node(data) 
        if (!this.head) 
        { 
            this.head = node; 
            this.tail = node; 
            return this; 
        
        } 

        this.tail.next = node; 
        this.tail = node; 
        return this;

    }

    pop() {
        // find the tail, and set the node before it to be null 

        if (!this.head) return; 
        if (this.head === this.tail) return this.head = null; 


        let node = this.head; 
        while (node.next.next) {
            node = node.next; 
            
        }
        node.next = null; 
        this.tail = node; 
        return this; 
    }

    shift() {
        // remove the beginning
        if (!this.head) return; 
        if (this.head === this.tail) return this.head = null; 

        this.head = this.head.next; 
        return this; 

    }

    unshift(data) {
        // add something in the beginning 
        // change the head to new head 
        // old head will be new head next val. 
        let node = new Node(data) 
        if (!this.head) {
            return this.head = node
            }
        
        let prev = this.head; 
        this.head = node; 
        this.head.next = prev;
         
        return this.head; 


    }

    get(index) {
        let node = this.head; 
        if (index < 0 ) return; 
        let counter = 0; 
        while(node.next) {
            if(counter === index) {
                return node; 
            }
            counter++ 
            node = node.next; 
        }
        return node 
    }

    set(data,index) {
         
        if (index < 0 ) return; 
        let node = this.get(index); 
        if (node) {
            node.data = data; 
            return this; 
        }

        return; 
        


    }

    remove(index) {
        let previous = this.get(index-1); 
        let removed = previous.next; 

        previous.next = removed.next; 

    }

    reverse() {
        let node = this.head; 
        this.head = this.tail; 
        this.tail = node; 
        
        let prev = null; 
        let next; 
        // [0,1,2,3]
        // [3,2,1,0]
        while(node){
            next = node.next; // 1 
            node.next = prev; 
            prev = next; 
            node = next; 
        }
        return this; 
    }
}
let doubly1 = new Doubly(); 

let singly1 = new Singly() 
 
