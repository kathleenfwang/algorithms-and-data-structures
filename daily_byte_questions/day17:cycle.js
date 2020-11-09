// 1->2->3, return null
// 1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
// 1->9->3->7->7 (7 points to itself), return a reference to the node containing 7

function cycle(list) {
    // have fast and slow pointer 
    // if fast === slow, return the one before fast .. 
    // if fast === null, return null 
    let slow = list.head 
    if (!slow) return null 
    if (!slow.next) return null 
    let fast = slow.next.next 
    let medium = slow.next
    while (fast.next && fast.next.next) {
        if (fast === slow) return medium.value 
        medium = medium.next
        fast = fast.next.next
        slow = slow.next   
    }
    return null 
}