class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // stupid method 
        // o(nlogn + mlogm) 
        // const sMatch = s.split("").sort((a, b) => (a.localeCompare(b))).join("")
        // const tMatch = t.split("").sort((a, b) => (a.localeCompare(b))).join("")
        // return sMatch === tMatch

        // other method - two hash maps - o(s + t + n)
        // if (s.length !== t.length) return false
        // const sCharMap = new Map()
        // const tCharMap = new Map()

        // for (const char of s.split("")) {
        //     const freq = sCharMap.get(char) ?? 0
        //     sCharMap.set(char, freq + 1)
        // }
        // for (const char of t.split("")) {
        //     const freq = tCharMap.get(char) ?? 0
        //     tCharMap.set(char, freq + 1)
        // }
        
        // for (const char of sCharMap.keys()) {
        //     if (sCharMap.get(char) !== tCharMap.get(char)) return false
        // }
        // return true

        // less loops
        if (s.length !== t.length) return false
        const sCharMap = new Map()
        const tCharMap = new Map()
        for (let i: number = 0; i < s.length; i++) {
            const sChar = s[i]
            sCharMap
        }

        for (const char of s.split("")) {
            const freq = sCharMap.get(char) ?? 0
            sCharMap.set(char, freq + 1)
        }
        for (const char of t.split("")) {
            const freq = tCharMap.get(char) ?? 0
            tCharMap.set(char, freq + 1)
        }
        
        for (const char of sCharMap.keys()) {
            if (sCharMap.get(char) !== tCharMap.get(char)) return false
        }
        return true
        
    }

}