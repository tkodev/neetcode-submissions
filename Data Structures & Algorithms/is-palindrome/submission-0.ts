class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // o(n)
        const strArr = s.replace(/[^a-z0-9]/gi, '').toLowerCase().split("")

        // o(n)
        for (let i: number = 0; i < strArr.length; i++) {
            const revIdx = strArr.length - 1 - i
            if (revIdx === i) return true
            const isMatch = strArr[revIdx] === strArr[i]
            if (!isMatch) return false
        }
        return true
    }
}
