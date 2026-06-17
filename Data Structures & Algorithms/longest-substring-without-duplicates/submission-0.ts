class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        // find unique strings
        // brute force hashmap
        // fails on pwwkew
        // const strArr = s.split("")
        // let offsetIdx = 0
        // let idxMap: Map<string, number> = new Map()
        // const uniqueSet: Set<string> = new Set()
        // for (let idx: number = 0; idx < strArr.length; idx++) { 
        //     const char = strArr[idx]
        //     const lastIdx = idxMap.get(char)
        //     if (lastIdx && lastIdx > offsetIdx) {
        //         uniqueSet.add(s.slice(lastIdx, idx))
        //         offsetIdx = idx
        //     }
        //     idxMap.set(char, idx)
        // }
        // const result = Math.max(...Array.from(uniqueSet).map((set) => set.length));
        // return result

        // sliding window
        // kinda like a scan that moves forward if a dupe is detected
        // deletes chars when found, moves left pointer forward
        // constantly updates res to map to highest number, existing res or new length
        // o(n + m) / o(m)
        const chars: Set<string> = new Set()
        let left = 0
        let res = 0
        for (let right: number = 0; right < s.length; right++) { 
            while (chars.has(s[right])) {
                chars.delete(s[left])
                left++
            }
            chars.add(s[right])
            res = Math.max(res, right - left + 1)
        }
        return res

    }
}


const solution = new Solution()
console.log(solution.lengthOfLongestSubstring("zxyzxyz"))
console.log(solution.lengthOfLongestSubstring("pwwkew"))
console.log(solution.lengthOfLongestSubstring("zzztawawerzzzasdfasdfadsfzzz"))
// console.log(solution.lengthOfLongestSubstring("abacdabacdabcabc"))