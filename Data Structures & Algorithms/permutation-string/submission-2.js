class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const freq = new Array(26).fill(0);
        for (let char of s1) {
            freq[char.charCodeAt(0) - 97]++;
        }
        console.log(freq)
        let l = 0;
        for (let r = 0; r < s2.length; r++) {
            freq[s2.charCodeAt(r) - 97]--;
            if (r - l + 1 > s1.length) {
                freq[s2.charCodeAt(l) - 97]++;
                l++;
            }
            if (r - l + 1 === s1.length && freq.every((count) => count === 0)) {
                return true;
            }
        }
        return false;
    }
}
