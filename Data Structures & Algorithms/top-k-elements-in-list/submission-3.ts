class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        // lets map the nums as a fraction of the max in nums
        // why do this? this is too complicated, we can simply use the num as the idx
        const max = Math.max(...nums)
        const length = nums.length
        const numMap: Map<number, {num: number, freq: number}> = new Map()
        for (let i: number = 0; i < length; i++) {
            const num = nums[i]
            const norm = num/max
            const idx = length * norm
            numMap.set(idx, { num, freq: (numMap.get(idx)?.freq ?? 0) +1})
        }

        // if we use array here, we may be able to remove sort,
        // but we'd also have to filter out all the undefined. hmmm
        const numArr = Array.from(numMap.values()).sort((a,b) => a.freq - b.freq)
        const result = numArr.slice(numArr.length - k).map(({num}) => num)

        // const result = numArr.reduce((acc, _, idx) => {
        //     const rearIdx = numArr.length - 1 - idx
        //     const { num } = numArr[rearIdx]
        //     acc.push(num)
        //     return acc
        // }, [])
        console.log({nums, k, numMap, numArr, result})
        return result
    }
}

// const solution = new Solution()
// console.log(solution.topKFrequent([ 5, 5, 5, 2, 3, 3 ], 2))
