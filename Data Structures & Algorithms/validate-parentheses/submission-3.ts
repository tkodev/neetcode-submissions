class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // o(n)
        const stack = []
        const dict = {
            "}": "{",
            ")": "(",
            "]": "["
        }
        // o(n)
        for (const char of s) {
            // if opening bracket found
            const openingBracket = dict[char]
            if(openingBracket) {
                if (stack.length > 0 && stack[stack.length - 1] === openingBracket) {
                    stack.pop()
                } else {
                    // nothing to pop, unmatched bracket
                    return false
                }
            } else {
                stack.push(char)
            }
        }
        return stack.length === 0
    }
}

const solution = new Solution()
console.log(solution.isValid("]"))