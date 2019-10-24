class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
    }
}
 
class Stack {
    constructor(...items) {
        this.reverse = false;
        this.stack = [...items];
    }

    push(...items) {
        return this.reverse
            ? this.stack.unshift(...items)
            : this.stack.push(...items);
    }

    pop() {
        return this.reverse ? this.stack.shift() : this.stack.pop();
    }
}

let stack1 = new Stack(2,4,1,5,5)
stack1.push(5,3)
stack1

class Stack2 {
    //use spread operator to allow more than one arg
    constructor(...items) {
        this.stack = items 
    }
    push(...items) {
        return this.stack.push(...items)
         
    }
    pop() {
        return this.stack.pop() 
    }
}

let stack2 = new Stack2(3,5,3,5,6)
stack2.stack 
stack2.push(3,5,6)

class Queue {
    constructor(...items) {
        this.queue = items 
    }
    enqueue(...items) {
        return this.queue.unshift(...items)
    }
    dequeue() {
        return this.queue.pop() 
    }
    peek() // return the top of list item that would be removed
    {
        return this.queue[this.queue.length -1]
    }
}

let queue1 = new Queue(3,5,2,5,6)
let queue2 = new Queue('hi','there','my','name','is','Kat')

const weave = (queueOne, queueTwo) => {
    const queueCombined = new Queue();

    while (queueOne.peek() || queueTwo.peek()) {
        if (queueOne.peek()) queueCombined.enqueue(queueOne.dequeue());
        if (queueTwo.peek()) queueCombined.enqueue(queueTwo.dequeue());
    }

    return queueCombined;
};

 
const weave1 = (queue1,queue2) => {
    let newQueue = new Queue() 
    
    while (queue1.peek() || queue2.peek()) {
    if (queue1.peek()) { newQueue.enqueue(queue1.dequeue())}
    if (queue2.peek()) { newQueue.enqueue(queue2.dequeue())}
       
    }
    return newQueue 
     
}

weave1(queue1,queue2)

let stack3 = new Stack('hi','kat','is','here')
let stack4 = new Stack('i','love','studying','cs')

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

