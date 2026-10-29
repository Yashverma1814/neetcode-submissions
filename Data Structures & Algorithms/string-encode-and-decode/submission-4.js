class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const s of strs) {
            res += `${s.length}#${s}`;
        }
        console.log(res)
        return res; // Must return a string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            // Find delimiter '#'
            const delimiterIndex = str.indexOf("#", i);
            const length = parseInt(str.substring(i, delimiterIndex), 10);

            // Extract the word using the known length
            const start = delimiterIndex + 1;
            const word = str.substring(start, start + length);
            res.push(word);

            // Move pointer to the next length prefix
            i = start + length;
        }

        return res; // Returns the array of strings
    }
}
