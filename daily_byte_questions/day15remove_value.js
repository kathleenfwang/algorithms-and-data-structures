// 1->2->3->null, value = 3, return 1->2->null
// 8->1->1->4->12->null, value = 1, return 8->4->12->null
// 7->12->2->9->null, value = 7, return 12->2->9->null
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
 
function removeValues(list,value) {
    // check if next is euql to value, if it is, current = next.next 
    let current = list.head 
    let next = current.next 
    if (current.value === value) {
        list.head = next 
        return 
    }
    while (current) {
        let next = current.next.next 
        if (current.next.value === value) {
            current.next = next 
            return 
        }
        current = current.next 
    }
}
let l1 = new LinkedList()
l1.add(1)
l1.add(2)
l1.add(3)
removeValues(l1,2)
console.log(l1)