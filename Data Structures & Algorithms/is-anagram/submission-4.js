class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    getStrCodeString(str) {
        const codeArr = Array.from({ length: 26 }).fill(0)
        const strArr = str.split("")
        for (const char of strArr) {
            const idx = char.charCodeAt(0) - "a".charCodeAt(0)
            codeArr[idx]++
        }
        return codeArr.join(",")
    }
    isAnagram(s, t) {
        const sCodeStr = this.getStrCodeString(s)
        const tCodeStr = this.getStrCodeString(t)
        return sCodeStr === tCodeStr
    }
}
