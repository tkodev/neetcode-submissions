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
        // recursive DFS - depth first search
        if (treeNode === null || (treeNode.left === null && treeNode.right === null)) return treeNode
        const tempLeft = treeNode.left
        const tempRight = treeNode.right
        treeNode.left = tempRight
        treeNode.right = tempLeft
        if (treeNode.left) this.invertTree(treeNode.left)
        if (treeNode.right) this.invertTree(treeNode.right)
        return treeNode
    }
}
