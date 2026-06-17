class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binSearch(nums: number[], target: number, l?: number, r?: number): number {
        let left = l ?? 0
        let right = r ?? nums.length -1
        while (left <= right) {
            const mid = Math.floor((right + left)/2)
            const midChar = nums[mid]
            if (midChar === target) return mid
            if (midChar < target) {
                left = mid + 1 // discard left half
            } else {
                right = mid - 1 // discard right half
            }
        }
        return -1
    }
    pivotSearch(nums: number[]): number {
        let left = 0
        let right = nums.length -1
        while (left < right) {
            const mid = Math.floor((left + right)/2)
            if (nums[mid] > nums[right]) {
                left = mid + 1 // discard left half
            } else {
                right = mid // discard right half
            }
        }
        return left
    }
    search(nums: number[], target: number): number {
        const pivot = this.pivotSearch(nums)
        const result = this.binSearch(nums, target, 0, pivot - 1); // search left side
        if (result !== -1) {
            return result
        } else {
            return this.binSearch(nums, target, pivot, nums.length); // search right side
        }
    }
}
