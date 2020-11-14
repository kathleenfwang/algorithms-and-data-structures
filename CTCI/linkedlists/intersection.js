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
        let tail = this.getTail()
        tail.next = node 
        return
    }
    getTail() {
        let current = this.head 
        // we want to stop when current.next = null, that means current is at the tail 
        while (current.next) {
            current = current.next
        }
        return current
    }
    len() {
        let current = this.head
        let len = 0
        while (current) {
            len++ 
            current = current.next
        }
        return len
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

function intersection(l1,l2) {
    let tail1 = l1.getTail(), tail2 = l2.getTail() 
    let head1 = l1.head,head2 = l2.head
    if (tail1 !== tail2) return false 
    let len1 = l1.len(),len2 = l2.len() 
    if (len1 > len2) {
        head1 = getStart(l1,len1-len2)
    }
    else {
        head2 = getStart(l2,len2-len1)
    }
    //loop through the lists until you get the interesection
    while (head1 && head2) {
        if (head1 === head2) return true 
        head1 = head1.next 
        head2 = head2.next
    }
    return false
}

function getStart(list,dif) {
    // return node to start at difference of lengths 
    let head = list.head 
    for (let i =0;i<=dif;i++) {
        head = head.next 
    }
    return head 
}