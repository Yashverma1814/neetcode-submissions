class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (i < j) {
            let sum = numbers[i] + numbers[j];
            if (target === sum) {
                return [i + 1, j + 1];
            } else if (target < sum) {
                j--;
            } else {
                i++;
            }
        }
        return [i + 1, j + 1];
    }
}
