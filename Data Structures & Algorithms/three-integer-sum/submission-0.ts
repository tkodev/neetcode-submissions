class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // brute force = o(n^2)

        // nlogn / o(n)
        const sortedNums = nums.sort((a,b) => a-b)
        const result: number[][] = []

        // o(n^2)
        for (let i: number = 0; i < sortedNums.length; i++) {
            const num = sortedNums[i]
            if (i > 0 && num === sortedNums[i - 1]) continue
            let leftIdx = i + 1
            let rightIdx = sortedNums.length - 1
            while (leftIdx < rightIdx) {
                const sum = num + sortedNums[leftIdx] + sortedNums[rightIdx]
                if (sum > 0) {
                    rightIdx--
                } else if (sum < 0) {
                    leftIdx++
                } else {
                    result.push([num, sortedNums[leftIdx], sortedNums[rightIdx]])
                    leftIdx++
                    while (sortedNums[leftIdx] === sortedNums[leftIdx - 1] && leftIdx < rightIdx){
                        leftIdx++
                    }
                }
            }
        }

        return result
    }
}
