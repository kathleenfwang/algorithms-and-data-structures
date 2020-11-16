class Node {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}
class LinkedList {
    constructor() {
        this.head = null 
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

// implement stack with a que 
class StackQue {
    constructor() {
        this.items = []
        this.que = [] 
    }
    push(item) {
        this.items.push(item)
    }
    pop(item) {
        // shift all items until you get teh last one adn then unshift that 
        // then add all items back to original 
        // [12345] -> [1234]
        while (this.items.length > 1) {
            let popped = this.items.shift() 
            this.que.push(popped) 
        }
        this.items.shift() 
        while (this.que.length > 0) {
            let popped = this.que.shift() 
            this.items.push(popped)
        }
         
    }
}
let s = new StackQue 
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.pop()

class QueLL {
    constructor(){
        this.items = new LinkedList()
    }
    enqueue(item) {
        let node = new Node(item) 
        if (!this.items.head) return this.items.head = node
        // add to end of list 
        let current= this.items.head 
        while(current.next) {
            current = current.next 
        }
        //current.next is currently null so we can just change its next to new node
        current.next = node 
    }
    dequeue() {
        // remove head 
        let head = this.items.head 
        let next = head.next 
        this.items.head = next 
    }
    print() {
        let current =this.items.head 
        while (current) {
            console.log(current.data)
            current= current.next
        }
    }
}
class StackLL {
    constructor() {
        this.items = new LinkedList()
    }
    push(item) {
        // add item to end of list 
        let node = new Node(item) 
        // find tail 
        let current =this.items.head 
        while (current.next) {
            current = current.next
        }
        current.next = node 
    }
    pop() {
        // remove last item 
        // find item before tail 
        let current = this.items.head
        while (current.next && current.next.next) {
            current = current.next
        }
        current.next = null 
    }
}

let q = new QueLL() 
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
q.print()