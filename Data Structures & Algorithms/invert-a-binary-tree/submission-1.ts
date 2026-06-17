// type TreeNode = {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
// }

// Definition for a binary tree node.
class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(treeNode: TreeNode | null): TreeNode {
        // breadth first search
        if (treeNode === null || (treeNode.left === null && treeNode.right === null)) return treeNode
        const queue = new Queue([treeNode])
        while (!queue.isEmpty()) {
            const node = queue.pop()
            const nodeLeft = node.left
            const nodeRight = node.right
            node.left = nodeRight
            node.right = nodeLeft
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
        }

        return treeNode
    }
}
