class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // o(n)
        const countMap: Map<number, number> = new Map()
        const freqArr: number[][] = Array.from({ length: nums.length }).map(() => ([]))
        const result: number[] = []

        // o(n) - count
        for (const num of nums) {
            const freq = (countMap.get(num) ?? 0) + 1
            countMap.set(num, freq)
        }
        // o(n) - buckets, bounded by of nums.length
        for (const [num, freq] of countMap) {
            freqArr[freq - 1].push(num)
        }

        // o(m * l)
        for (let i: number = freqArr.length-1; i >= 0; i--) {
            for (const num of freqArr[i]) {
                result.push(num)
                if (result.length >= k) return result
            }
        }
        return result
    }
}

const solution = new Solution()
console.log({ results: solution.topKFrequent([200,1,2,2,3,3,3], 2) })
console.log({ results: solution.topKFrequent([1], 1) })
