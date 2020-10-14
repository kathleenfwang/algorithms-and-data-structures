// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 */
var pathSum = function(root, sum) {
    let paths = [] 
    findPaths(root,sum,[],paths)

    function findPaths(current,sum,arr,paths) {

        if (!current) return
        arr.push(current.val)
        // checking if 
        if (sum === current.val && !current.left && !current.right) {
            paths.push(arr)
            return paths
        }
        // we are subtracting the current value from the sum because we are now looking if the next value + current is = sum ( and has no children) 
        // we are passing in a copy of the array (through slice) because if we pass in the original array, it will push every value in the tree. 
        findPaths(current.left, sum - current.val,arr.slice(),paths)
        findPaths(current.right, sum - current.val,arr.slice(),paths)
        
    }
    return paths
    
};