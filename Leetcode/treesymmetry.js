var isSymmetric = function(root) {
    if (!root) return true 
    
    return leavesSymmetric(root.left,root.right)
    function leavesSymmetric(left,right) {
        if (!left || !right) {
            // both left and right have to be null if one is null 
            return left === right 
        }
        if (left.val !== right.val ) {
            return false 
        }
        return leavesSymmetric(left.left,right.right) && leavesSymmetric(left.right,right.left)
    }
    
};
// https://leetcode.com/problems/symmetric-tree/submissions/