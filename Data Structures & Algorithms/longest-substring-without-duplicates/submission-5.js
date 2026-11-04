class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s.length) return 0;
        let max = 0;
        let subStr = "";
        for (let i = 0; i < s.length; i++) {
            let index = subStr.indexOf(s[i]);
            if (index !== -1) {
                subStr = subStr.slice(index + 1);
            }
            subStr += s[i];
            if (max < subStr.length) {
                max = subStr.length;
            }
        }
        return max;
    }
}
