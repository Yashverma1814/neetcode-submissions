class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let end = 0;
        let farthest = 0;
        let jump = 0;
        for (var i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);
            if (i == end) {
                jump += 1;
                end = farthest;
            }
        }
        return jump;
    }
}
