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
l1.add(3)
l1.add(2)
l1.add(2)
l1.add(5)

function remove_duplicates(list) {
    let hash = {} 
    let head = list.head 
    let prev = list.head 
    if (!head.next) return list 
    while (head) {
        if (!hash[head.value]) {
            hash[head.value] = 1
            prev = head 
        }
        else {
            let next = head.next 
            prev.next = next  
        }
        head = head.next
        
    }
    return list 
}

console.log(remove_duplicates(l1))
l1.print()
