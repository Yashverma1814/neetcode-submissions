class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const obj = {};
        for (let i = 0; i < s.length; i++) {
            obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
        }
        for (let i = 0; i < t.length; i++) {
            obj[t[i]] = obj[t[i]] ? obj[t[i]] - 1 : -11;
        }
        for (const [key, value] of Object.entries(obj)) {
            if(value!==0) return false
        }
        return true
    }
}
