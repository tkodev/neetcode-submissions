/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        // breadth first search
        if (root === null) return []
        const queue = new Queue([[root, 0]])
        let result = []
        while (!queue.isEmpty()) {
            const [node, depth] = queue.pop()
            if (result[depth]) {
                result[depth].push(node.val)
            } else {
                result[depth] = [node.val]
            }
            if (node.left) queue.push([node.left, depth+1])
            if (node.right) queue.push([node.right, depth+1])
        }
        return result
    }
}
