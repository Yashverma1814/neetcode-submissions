class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0;
        let j = height.length - 1;
        let min;
        let count = 0;
        while (i < j) {
            if (height[i] > height[j]) {
                min = height[j];
                j--;
                while (min > height[j] && i < j) {
                    count += min - height[j];
                    j--;
                }
            } else {
                min = height[i];
                i++;
                while (min > height[i] && i < j) {
                    count += min - height[i];
                    i++;
                }
            }
        }
        return count;
    }
}
