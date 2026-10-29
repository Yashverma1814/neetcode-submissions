class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        return Array.from(freqMap.keys())
            .sort((a, b) => freqMap.get(b) - freqMap.get(a))
            .slice(0, k);
    }
}
