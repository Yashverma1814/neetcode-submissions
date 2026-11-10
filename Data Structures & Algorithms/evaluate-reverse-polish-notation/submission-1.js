class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = new Set(["+", "-", "*", "/"]);

        for (let token of tokens) {
            if (operators.has(token)) {
                let b = stack.pop(); // second operand
                let a = stack.pop(); // first operand

                if (token === "+") stack.push(a + b);
                else if (token === "-") stack.push(a - b);
                else if (token === "*") stack.push(a * b);
                else if (token === "/") stack.push(Math.trunc(a / b));
            } else {
                stack.push(Number(token)); // push the actual value
            }
        }

        return stack[0];
    }
}
