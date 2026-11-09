class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stackArr = [];
        let mapping = { "}": "{", "]": "[", ")": "(" };
        let i = 0;
        while (i < s.length) {
            if ("({[".includes(s[i])) {
                stackArr.push(s[i]);
            } else {
                if (stackArr[stackArr.length - 1] !== mapping[s[i]]) return false;
                stackArr.pop();
            }
            i++;
        }
        if (stackArr.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
