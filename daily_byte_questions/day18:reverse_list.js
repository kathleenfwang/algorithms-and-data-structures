// 1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null
// 7->15->9->2->null, return a reference to the node that contains 2 which points to a list that looks like the following: 2->9->15->7->null
// 1->null, return a reference to the node that contains 1 which points to a list that looks like the following: 1->null
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
let l1 = new LinkedList()
l1.add(1)
l1.add(2)
l1.add(3)
 
function reverseList(list) {
    let previous = null 
    let head = list.head 
    while (head) {
        // once we get to null, we want head to be the last value 
        let next = head.next 
        head.next = previous 
        previous = head 
        head = next
    }
    return previous
}

console.log(reverseList(l1))