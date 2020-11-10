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
    print() {
        let current = this.head 
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
    remove_node(val) {
        let current = this.head 
        let prev = current 
        if (current.value === val) {
            this.head = current.next 
            return
        }
        while (current) {
            if (current.value === val) {
                let next = current.next
                prev.next = next
                return
            }
            prev = current 
            current = current.next 
        }
    }

} 
let l1 = new LinkedList()
l1.add(1)
l1.add(2)
l1.add(3)
l1.add(2)
l1.add(2)
l1.add(5)
 
console.log(l1.remove_node(3))
l1.print()
