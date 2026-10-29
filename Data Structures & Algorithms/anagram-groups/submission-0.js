class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let i = 0; i < strs.length; i++) {
            let sortedElement = strs[i].split("").sort().join("");
            if (map.has(sortedElement)) {
                map.get(sortedElement).push(strs[i]);
            } else {
                map.set(sortedElement, [strs[i]]);
            }
        }
        let res = []
        for (const val of map.values()) {
            res.push(val)   
        }
        return res
    }
}
