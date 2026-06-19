/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prevNode = null
        let curNode = head
        let lastNode = null
        while (curNode) { 
            let nextNode = curNode.next
            if (!nextNode) lastNode = curNode
            curNode.next = prevNode

            // set the next iteration
            prevNode = curNode
            curNode = nextNode
        }
        return lastNode
    }
}
