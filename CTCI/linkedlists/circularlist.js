// have one pointer 2x as fast
// return when fast == slow pointer 
// slow pointer goes one node at a time 

function isCircular(list) {
    let slow = list.head
    if (!slow.next && !slow.next.next) {
        return false 
    }
    let fast = slow.next.next
    // if the poitneres eventually end up null, false which means there is an end to the list
    while  (fast.next) {
        console.log
        if (fast === slow) return fast 
        fast = fast.next.next 
        slow = slow.next 
    }
    return false
}

class Node { 
    // constructor 
    constructor(element,next = null) 
    { 
        this.value = element; 
        this.next = next
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
let node = new Node(9,1)
l1.add(1)
l1.add(8)
l1.add(node)
 
l1.print()
console.log(isCircular(l1))

 