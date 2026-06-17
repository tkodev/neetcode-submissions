class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

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
