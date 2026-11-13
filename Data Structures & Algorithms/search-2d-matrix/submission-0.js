class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let left = 0;
        let right = m * n - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let row = Math.floor(mid / n);
            let col = mid % n;
            console.log(mid, row, col, left, right);
            if (target === matrix[row][col]) {
                return true;
            } else if (target > matrix[row][col]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
