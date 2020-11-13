function listPalindrome(list) {
    // 43234
    // reverse list and compare 
    let reverse = reverse(list)
    let head1 = list.head 
    let head2 = reverse.head 
    while (head1) {
        if (head1.data !== head2.data) return false 
        head1 = head1.next 
        head2 = head2.next 
    }
}
function reverse(list) {
    let reversed = new LinkedList()
    let head = null 
    let current = list.head 
    while (current) {
        let n = new Node(current.data) 
        n.next = head 
        head = n 
        current = current.next
    }
    reversed.head = head 
    return reversed
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