class SortedStack {
    constructor() {
        this.items = [] 
    }
    push(item) {
        if (this.items.length === 0) this.items.unshift(item) 
        if (item <= this.peek()) {
            this.items.unshift(item)
        }
   
    }
    peek() {
        return this.items[0]
    }
}