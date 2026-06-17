class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numMap: Map<number, number> = new Map()
        for (const num of nums) {
            const freq = (numMap.get(num) ?? 0) + 1
            numMap.set(num, freq)
        }

        const numArr = Array.from(numMap.entries()).sort((a, b) => a[1] - b[1])
        const result = numArr.slice(numArr.length - k).map(([num]) => num)

        return result
    }
}

// const solution = new Solution()
// console.log(solution.topKFrequent([ 5, 5, 5, 2, 3, 3 ], 2))
