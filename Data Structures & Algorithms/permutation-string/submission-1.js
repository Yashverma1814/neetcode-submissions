class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const freq = new Array(26).fill(0);

        // Store frequency of s1
        for (const char of s1) {
            freq[char.charCodeAt(0) - 97]++;
        }

        let left = 0;

        for (let right = 0; right < s2.length; right++) {
            // Include current character
            freq[s2.charCodeAt(right) - 97]--;

            // Window size should not exceed s1.length
            if (right - left + 1 > s1.length) {
                freq[s2.charCodeAt(left) - 97]++;
                left++;
            }

            // Valid permutation found
            if (right - left + 1 === s1.length && freq.every((count) => count === 0)) {
                return true;
            }
        }

        return false;
    }
}
