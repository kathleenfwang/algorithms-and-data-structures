function reverseList(list) {
    // we want the head to point to null and the next to poitn to head 
    let head = null
    let current = list.head 
    while (current) {
        let n = new Node(current.value) 
        n.next = head // point back to previous value 
        head = n // want new head to be at current value 
        current = current.next // this is to update current (has no relation to the other pointers)
    }
 
    return head 
}
class Node { 
    // constructor 
    constructor(element) 
    { 
        this.value = element; 
        this.next = null
    } 
} 
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
    } 
    add(data) {
        let node = new Node(data) 
        if (!this.head) {
            this.head = node
            return}
        if (!this.head.next){
            this.head.next = node 
            return
        } 
        // otherwise find the tail 
        let current = this.head 
        while (current.next) {
                current = current.next
        }
        current.next = node
        return
    }
    print() {
        let current = this.head 
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }

} 
let l1 = new LinkedList()
l1.add(9)
l1.add(8)
l1.add(3)
console.log(reverseList(l1))