class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        // initially i did a brute force method, iterate through nums twice - o(n2)
        // then I made two loops, one to store the index for the whole nums, second to find the matchIdx for the diff
        // then I compressed the two loops into one. I use the same map to calc the diff, find the match, store if not

        const numMap: Map<number, number> = new Map()
        let result = []
        nums.some((num, idx) => {
            const diff = target-num
            const matchIdx = numMap.get(diff) 
            if (typeof matchIdx === "number") {
                result = [matchIdx, idx]
                return true
            } else {
                numMap.set(num, idx)
            }
        })
        return result
    }

}
