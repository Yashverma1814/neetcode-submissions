class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        while (left < right) {
            let hours = 0;
            let mid = Math.floor((left + right) / 2);
            for (const p of piles) {
                hours += Math.ceil(p / mid);
            }
            if (hours <= h) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
