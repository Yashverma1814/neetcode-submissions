class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let max = 0;
        while (i < j) {
            let l = Math.min(heights[i], heights[j]);
            let b = j - i;
            const area = l * b;
            if (area > max) {
                max = area;
            }
            if (heights[i] > heights[j]) {
                j--;
            } else {
                i++;
            }
        }
        return max;
    }
}
