function rotateList(list,n) {
    let root = list.head
    if (!root) return null 
    let fast = root 
    let slow = root 
    // find where fast starts 
    for (let i =0;i<n;i++) {
        fast = fast.next 
    }
    while (fast.next) {
        fast = fast.next 
        slow = slow.next 
    }
    let nextHead = slow.next
    slow.next = null 
    fast.next = root 
    list.head = nextHead
    return list
}

class List {
    constructor(){
        this.head = null 
    }
    add(data) {
        let node = new Node(data) 
        if (!this.head) this.head = node 
        else {
            let root = this.head 
            while (root.next) {
                root = root.next 
            }
            root.next = node 
        }
        return 
    }
    print() {
        let root = this.head 
        while (root) {
            console.log(root.data)
            root = root.next
        }
    }
}
class Node {
    constructor(data) {
        this.data = data
        this.next = null 
    }
   
}

let l = new List()
let node = new Node(1)
l.head = node 
l.add(2)
l.add(3)
l.add(4)
l.add(5)

console.log(rotateList(l,3).print()) // 3-4-5-1-2-null