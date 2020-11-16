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
console.log(s.items)

