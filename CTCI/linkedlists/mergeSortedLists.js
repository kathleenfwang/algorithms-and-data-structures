function mergeSorted(list1, list2) {
    //123
    //246
    let newList = new LinkedList()
    // add head 
    let newHead = null
    let head1 = list1.head
    let head2 = list2.head
    if (head1.val < head2.val) {
        newHead = new Node(l1.head.val)
        newList.head = newHead
        head1 = head1.next
    }
    else {
        newHead = new Node(l2.head.val)
        newList.head = newHead
        head2 = head2.next
    }
    // loop through both lists
    while (head1 || head2) {
        let newNode = null
        if (!head1) {
            // add all of list 2 onto newList
            newNode = new Node(head2.val)
            newHead.next = newNode
            head2 = head2.next
        }
        else if (!head2) {
            newNode = new Node(head1.val)
            newHead.next = newNode
            head1 = head1.next
        }
        else {
            if (head1.val < head2.val) {
                newNode = new Node(head1.val)
                newHead.next = newNode
                head1 = head1.next
            }
            else {
                newNode = new Node(head2.val)
                newHead.next = newNode
                head2 = head2.next
            }
        }
        newHead = newHead.next
    }
    return newList.print()
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    print() {
        let current =this.head 
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}
let l1 = new LinkedList()
l1.head = new Node(1)
l1.head.next = new Node(2)
l1.head.next.next = new Node(5)

let l2 = new LinkedList()
l2.head = new Node(3)
l2.head.next = new Node(4)
l2.head.next.next = new Node(6)

console.log(mergeSorted(l1, l2))
