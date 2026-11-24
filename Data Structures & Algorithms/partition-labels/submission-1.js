class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const count = new Map();
        let set = new Set();
        let res = [];
        let subStrCount = 0;
        for (const s of S) {
            count.set(s, (count.get(s) || 0) + 1);
        }
        for (const s of S) {
            if (!set.has(s)) {
                set.add(s);
            }
            count.set(s, count.get(s) - 1);
            count.get(s);
            subStrCount++;
            if (count.get(s) === 0) {
                set.delete(s);
            }
            if (set.size === 0) {
                res.push(subStrCount);
                subStrCount = 0;
            }
        }
        return res;
    }
}
