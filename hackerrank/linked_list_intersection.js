// find value where two linked lists intersect 
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

function listIntersection(l1,l2) {
    let arr = getList(l1)
    let current = l2.head 
    if (!current) return null 
    let i = 0 
    while (current) {
        if (current.value === arr[i]) return current.value 
        i++ 
        current = current.next
    }
    return null
}

function getList(list) {
    let head = list.head 
    let arr = []
    if (!head) return arr 
    while (head) {
        arr.push(head.value)
        head = head.next 
    }
    return arr 
}
let l1 = new LinkedList()
l1.add(1)
l1.add(2)
l1.add(3)
let l2 = new LinkedList()
l2.add(5)
l2.add(2)
l2.add(5)

console.log(listIntersection(l1,l2))