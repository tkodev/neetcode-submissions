class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map()
        const freqArr = Array.from({ length: nums.length }).map(() => ([]))
        const result = []

        for (const num of nums) {
            countMap.set(num, (countMap.get(num) ?? 0) + 1)
        }
        for (const [num, count] of countMap) {
            const idx = count-1
            freqArr[idx].push(num)
        }

        for (let i = freqArr.length-1; i >= 0; i--) {
            for (const num of freqArr[i]) {
                if (result.length < k) {
                    result.push(num)
                }
            }
        }

        return result
    }
}
