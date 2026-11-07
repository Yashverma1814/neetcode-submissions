class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const freq = new Map();

        for (const char of t) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }

        let left = 0;
        let count = t.length;
        let minLen = Infinity;
        let start = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            if (freq.has(char)) {
                if (freq.get(char) > 0) count--;

                freq.set(char, freq.get(char) - 1);
            }

            // Valid window
            while (count === 0) {
                const windowLen = right - left + 1;

                if (windowLen < minLen) {
                    minLen = windowLen;
                    start = left;
                }

                const leftChar = s[left];

                if (freq.has(leftChar)) {
                    freq.set(leftChar, freq.get(leftChar) + 1);

                    if (freq.get(leftChar) > 0) count++;
                }

                left++;
            }
        }

        return minLen === Infinity ? "" : s.substring(start, start + minLen);
    }
}
