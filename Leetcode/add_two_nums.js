// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
 
    
class ListNode {
    constructor(val,next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function getNums(list) {
    let result = [] 
    let head = list
    while (head) {
        result.push(head.val)
        head = head.next
    }
    return result
}
var addTwoNumbers = function(l1, l2) {
    //output the values into an array, reverse, add ? 
    // then reverse sum and put into new list 
    let l1List = getNums(l1),l2List = getNums(l2)  // [2,4,3],[5,6,4]
    
    return parseInt(l1List.join()) + parseInt(l2List.join())

    

};
let list = new ListNode(2,4)
list.next = 3 
let list2 = new ListNode(5,6)
list2.next = 4 
console.log(addTwoNumbers(list,list2))