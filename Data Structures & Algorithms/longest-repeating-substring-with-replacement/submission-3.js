class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let count = {};
        let top = 0;
        let best = 0;

        for (let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            top = Math.max(top, count[s[r]]);

            // If characters needing replacement exceed k, shrink window from the left
            if (r - l + 1 - top > k) {
                count[s[l]] -= 1;
                l++;
            }

            best = Math.max(best, r - l + 1);
        }

        return best;
    }
}
