class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let len = heights.length;
        let stack = [];
        let maxArea = 0;

        // Loop up to len (inclusive) to flush remaining bars with a virtual 0 height
        for (let i = 0; i <= len; i++) {
            let currentHeight = i === len ? 0 : heights[i];

            while (stack.length > 0 && heights[stack[stack.length - 1]] >= currentHeight) {
                let poppedIndex = stack.pop();
                let height = heights[poppedIndex];

                // Right boundary is i; left boundary is the new stack top (or -1 if empty)
                let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
