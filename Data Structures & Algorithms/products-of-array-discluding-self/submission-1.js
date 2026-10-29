class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let arr = new Array(n).fill(1);
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            arr[i] *= prefix;
            prefix *= nums[i];
        }
        let suffix = 1;
        for (let j = n-1; j >= 0; j--) {
            arr[j] *= suffix;
            suffix *= nums[j];
        }
        return arr
    }
}
