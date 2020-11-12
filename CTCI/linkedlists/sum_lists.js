function sumLists(l1,l2) {
    let result = new LinkedList 
    function addLists(l1,l2,value) {
        //linkedlist is stored in reverse order (923 -> 329)
        if (!l1 && !l2 && !value) return null 
        // add the l1 + l2 data values to value 
        if (l1) value += l1.value 
        if (l2) value += l2.value 

        // get 2nd digit of value 
        let carry = value % 10
        // we are adding this to the result
        result.add(carry)
    
        if (l1 || l2) {
            addLists(l1 ? l1.next : null, l2 ? l2.next : null, value >= 10 ? 1 : 0)
        }  
    }
    addLists(l1.head,l2.head,0)
    return result.print() 
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
let l2 = new LinkedList() 
l2.add(2)
l2.add(2)
l2.add(5)

console.log(sumLists(l1,l2)) // 389 + 522 = 851 -> 911