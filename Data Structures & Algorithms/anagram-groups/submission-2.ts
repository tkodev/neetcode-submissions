class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    private getCountStr(str: string): string  {
        const countArr = new Array(26).fill(0)
        for (let i: number = 0; i < str.length; i++) {
            const code = str.charCodeAt(i) - "a".charCodeAt(0)
            countArr[code]++
        }
        return countArr.join(",")
    }
    
    // time: o(n * m)
    // space: o(n * m), where n = number of strings, m = array of 26
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap: Map<string, string[]> = new Map()
        for (const str of strs) {
            const countStr = this.getCountStr(str)
            const currArr = anagramMap.get(countStr)
            if (currArr) {
                currArr.push(str)
            } else {
                anagramMap.set(countStr, [str])
            }
        }
        const result = Array.from(anagramMap.values())
        return result
    }
}
