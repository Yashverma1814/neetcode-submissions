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
     * @return {boolean}
     */
    hasCycle(head) {
        let fast = head;
        let slow = head;
        let i = 0;
        while (fast && slow) {
            fast = fast.next;
            if (fast === null) {
                break;
            }
            fast = fast.next;
            if (fast === null) {
                break;
            }
            slow = slow.next;
            if (fast === slow) {
                return true;
            }
        }
        return false;
    }
}
