class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffMap = new Map() 
        for (let idx = 0; idx < nums.length; idx++) {
            const num = nums[idx]
            const diff = target-num
            const matchIdx = diffMap.get(diff)
            if (typeof matchIdx === "number") {
                return [matchIdx, idx]
            } else {
                diffMap.set(num, idx)
            }
        }
        return []
    }
}
