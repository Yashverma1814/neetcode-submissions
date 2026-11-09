class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (!nums || nums.length === 0 || k === 0) return [];

        const res = [];
        const deque = []; // Indices store karega

        for (let i = 0; i < nums.length; i++) {
            // Step 1: Out-of-bounds indices ko front se hatao
            // Current window start hoti hai (i - k + 1) se
            if (deque.length > 0 && deque[0] < i - k + 1) {
                deque.shift();
            }

            // Step 2: Peeche se saare chote elements hatao (Monotonic property)
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            // Step 3: Current element ka index push karo
            deque.push(i);

            // Step 4: Pehli window complete hone ke baad front element result me daalo
            if (i >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}
