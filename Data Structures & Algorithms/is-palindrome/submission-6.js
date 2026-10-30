class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length === 1) return true;
        let i = 0;
        let j = s.length - 1;
        while (i <= j) {
            if (" ?,'.:!".includes(s[i])) {
                i++;
                continue;
            }
            if (" ?,'.:!".includes(s[j])) {
                j--;
                continue;
            }
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                console.log(s[i], s[j]);
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
