function partition(linkedList,num) {
    let small = new LinkedList()
    let big = new LinkedList() 

    let head = linkedList.head
    if (!head) return null  
    while (head) {
        if (head.value < num) small.add(head.value)
        else {
            big.add(head.value)
        }
        head = head.next
    }
    // combine small -> big, find tail at small and point to head of big 
    combine(small,big)
    small.print()
}
function combine(l1,l2) {
    if (!l1) return l2 
    if (!l2) return l1 
    let head2 = l2.head 
    while(head2) {
        l1.add(head2.value)
        head2 = head2.next
    }
    return l1 
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
        this.size = 0; 
    } 
    add(data) {
        let node = new Node(data) 
        if (!this.head) {
            this.head = node
            return}
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
l1.add(1)
l1.add(2)
l1.add(8)
l1.add(4)
l1.add(3)
l1.add(2)

partition(l1,5)