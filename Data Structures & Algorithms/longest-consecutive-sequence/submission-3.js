class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let max = 0;
        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let count = 0;
                let numT = num
                while (numSet.has(numT)) {
                    count++;
                    numT++;
                }
                if (count > max) {
                    max = count;
                }
            }
        }
        return max;
    }
}
