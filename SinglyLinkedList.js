class Node {
    constructor(data){ 
        this.data = data; 
        this.next = null; 
        this.prev = null;

    }
}

class Doubly {
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0; 
    }
    print() {
        let node = this.head; 
        if (!this.head) return; 


        while(node.next) {
            console.log(node)
            node = node.next; 
        }
        console.log(node)

    }
    push(data) {
        let node = new Node(data); 
        if (!this.head) {
            this.head = node; 
            this.tail = node; 
            this.length++ 
            return this; 
        }

        else {
            this.tail.next = node; 
            node.prev = this.tail 
            this.tail = node; 
            this.length++ 
            return this; 
        }
    }
    pop() {
        // remove the last item 
        if (this.length === 1) 
        { return this.head = null; } 

        let temp = this.tail; 
        this.tail = this.tail.prev; 
        this.tail.next = null; 
        this.length--; 
        return temp; 
    

    }
    shift() {
        // removes the node in the beginning.. 
        if (!this.head) return; 
        if (this.length === 1) {
            this.length-- 
            this.head = null;
            this.tail = null; 
            return this; 

        }

        this.head = this.head.next; 
        this.head.prev = null; 
        this.length-- 
        return this; 

    }
    unshift(data) {
        let node = new Node(data) 
        if (!this.head) {
            this.length++
            this.head = node; 
            this.tail = node; 
            return this; 
        }

        this.head.prev = node; 
        let prev = this.head; 
        this.head = node; 
        this.head.next = prev; 
        this.length++ 
        return this; 


    }
    get(index) {
        if (index < 0 ) return; 
        let node = this.head; 
        let counter = 0; 

        // check if starting at beg or end. 
        let mid = Math.floor(this.length / 2); 

        if (index <= mid) {
             
            while(node.next) {
                if (counter === index ) {
                    return node; 
                }
                counter++ 
                node = node.next; 

            }
        }

        //start at the end of list. 
        else {
            counter = this.length - 1; 
            while(node.prev) {
                if (counter === index) {
                    return node; 
                }
                counter--; 
                node = node.prev; 
            }

            
        }
        return this.tail; 
    }

    set(data,index) {
        let found = this.get(index)
        if (found) {
            found.data = data; 
            return this; 
        }
        return; 
    }
    
    insert(data,index) {
        if (index < 0 || index > this.length ) return; 
        if (index === 0 ) { return this.shift(data)}
        if (index === this.length) {return this.push(data)}

        let node = new Node(data); 
        let original = this.get(index-1); 
        let after = original.next; 
        
        original.next = node; 
        after.prev = node; 
        node.next = after; 
        node.prev = original; 
        this.length++ 
        return this; 
    }

    remove(index) {
        if (index < 0) return; 
        if (index === 0 ) {return this.unshift()}
        if (index === this.length - 1 ) {return this.pop()}

        let remove = this.get(index); 
        let after = remove.next; 
        let before = remove.prev; 

        before.next = after; 
        after.prev = before; 

        return this; 

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
 