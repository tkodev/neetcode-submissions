class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    getStrCodeArr(str) {
        const codeArr = Array.from({ length: 26 }).fill(0)
        const strArr = str.split("")
        for (const char of strArr) {
            const idx = char.charCodeAt(0) - "a".charCodeAt(0)
            codeArr[idx]++
        }
        return codeArr
    }
    isAnagram(s, t) {
        const sCodeArr = this.getStrCodeArr(s)
        const tCodeArr = this.getStrCodeArr(t)
        for (let i = 0; i < 26; i++) {
            const sCode = sCodeArr[i]
            const tCode = tCodeArr[i]
            if (sCode !== tCode) return false
        }
        return true
    }
}
