class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
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
    groupAnagrams(strs) {
        const codeMap = new Map()
        for (const str of strs) {
            const codeStr = this.getStrCodeString(str)
            const codeArr = codeMap.get(codeStr)
            if (codeArr) {
                codeArr.push(str)
            } else {
                codeMap.set(codeStr, [str])
            }
        }
        return Array.from(codeMap.values())
    }
}
