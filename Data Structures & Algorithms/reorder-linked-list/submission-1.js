class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // 1. Find the middle and split into two halves
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let first = head;
        let second = slow.next;
        slow.next = null;

        // 2. Reverse the second half
        let prev = null;
        while (second) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        // 3. Merge the two halves alternately (prev is now the head of the reversed second half)
        second = prev;
        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
