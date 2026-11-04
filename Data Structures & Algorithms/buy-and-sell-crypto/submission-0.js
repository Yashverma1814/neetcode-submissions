class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let i = 0;
        let j = 1;
        while (i < prices.length && j < prices.length) {
            if (prices[i] > prices[j]) {
                i = j;
                j = j + 1;
            } else {
                let profit = prices[j] - prices[i];
                if (profit > maxP) {
                    maxP = profit;
                }
                j++;
            }
        }
        return maxP;
    }
}
