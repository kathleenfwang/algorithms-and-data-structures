// 1->2->3->null, return 2
// 1->2->3->4->null, return 3
// 1->null, return 1
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
        this.size = 0; 
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
 
} 

function returnMiddle(list) {
    let slow = list.head
    let fast = list.head 
  
    while (fast.next && fast.next.next ) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow.value
}
let l1 = new LinkedList()
l1.add(1)
l1.add(2)
l1.add(3)
l1.add(4)
 

console.log(returnMiddle(l1))