class Stack {
    constructor() {
        // items is (1,2,3,5) have to spread it in the constructor otherwise it will just be the single value
        this.items = []
        // have a separate stack to keep track of the mins so it will have a history of the previous min value if the original min gets popped out 
        this.minStack = [] 
    }
    push(item) {
        // add item to the end 
        this.items.push(item)
        // check if new item is smaller than min 
        if ( item < this.findMin()) {
            this.minStack.push(item)
        }
    }
    pop() {
        // remove last item 
        let item = this.items.pop()
        if (item === findMin()) this.minStack.pop() 
      
    }
    findMin() { 
         if (this.minStack.length === 0) return Infinity 
         return this.minStack[this.minStack.length - 1]
    }
}

let s = new Stack()
s.push(2)
s.push(3)
s.push(5)
s.push(1)
console.log(s.findMin())
