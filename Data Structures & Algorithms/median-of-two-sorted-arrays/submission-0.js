class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let nums = [...nums1, ...nums2];
        nums.sort((a, b) => a - b);
        let len = nums.length;
        if (len % 2 === 0) {
            let median1 = len / 2 - 1;
            let median2 = median1 + 1;
            return (nums[median1] + nums[median2]) / 2;
        } else {
            let median = (len + 1) / 2;
            return nums[median - 1];
        }
    }
}
