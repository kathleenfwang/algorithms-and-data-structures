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