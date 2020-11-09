// list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
// list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
// list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null 

// loop through both loops, putting the smallest in a new list ? 
class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
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
        if (!this.head) this.head = node 
        // otherwise find the tail 
        let current = this.head 
        while (current.next) {
                current = current.next
        }
        current.next = node
        return
    }
 
} 
function mergeSortedLinkedLists(l1,l2) {
    let result = new LinkedList() 
    let l1Head = l1.head 
    let l2Head = l2.head 
    result.head = l1Head < l2Head ? l1Head : l2Head 
    while (l1Head) {
        l1Head = l1Head.next 
        l2Head =l2Head.next 
        result.next = l1Head < l2Head ? l1Head : l2Head 
    }
    return result 
}
// list1 = 1->2->3, list2 = 4->5->6->null, 
let l1 = new LinkedList() 
l1.add(1)
l1.add(2)
l1.add(3) 
console.log(l1)