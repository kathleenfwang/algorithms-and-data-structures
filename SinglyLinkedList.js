class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }
    push(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            this.tail.next = newNode; 
            console.log('tail', this.tail)
            this.tail = newNode;  
        }
         
        this.length++;
        return this; // return the list 
    }
    traverse() {
        let current = this.head 
        let last; 
        while (current) // current !== null 
        {
            console.log(current.val)
            if (!current.next) last = current.val
            current = current.next
          
             
        }
    }
    removeTail() {
        let current = this.head; 
        let newTail = current; 

        while(current.next) {
            newTail = current
            current = current.next 
            
        }
        this.tail = newTail; 
        this.tail.next = null; 
        this.length-- 
        return current 
    }

    insertHead(val) {
        let newNode = new Node(val); 
        let info = this.head 
        this.head = newNode
        this.head.next = info 
        this.length++ 
        return this
    }
         
    getHead(){
        return this.head
    }

    getTail(){
        return this.tail
    }
    clear() {
        this.head = null;
        this.tail = null; 
        this.length = 0;   
        return this; 
    }
    insertTail(val) {
        let tail = this.getTail(); 
        if (tail) tail.next = new Node(val); 
        else {
            this.head = new Node(val)
        }
        this.length++ 
    return this 
    }

    deleteItem(val) {
        if (val === this.head.val) {
            let info = this.head.next 
            this.head = info
             
        }
        this.length--
        return this 
    }
}
let linked1 = new SinglyLinkedList()
linked1.push('!!!')
linked1.insertHead('Oh')
linked1.getTail()
linked1.insertTail('???')
linked1
