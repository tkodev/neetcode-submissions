class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // I was going to go through the array once
        // multiplying each result in resultmap by the current num except the current result index
        // o(n)
        // const resultArr = Array.from({ length: nums.length }).fill(1) as number[]
        // o(n^2)
        // nums.forEach((num, idx) => {
        //     resultArr.forEach((_, resultIdx) => {
        //         if (resultIdx != idx) resultArr[resultIdx] *= num
        //     })
        // })

        // here I create two arrays of prefix products and suffix products
        // then multiply the prefix and suffix of each product
        // o(2n)
        // const prefixArr = []
        // const suffixArr = []

        // o(2n)
        // for (let idx: number = 0; idx < nums.length; idx++) {
        //     const num = nums[idx]
        //     prefixArr[idx] = (prefixArr[idx-1] ?? 1) * num
        // }
        // for (let idx: number = nums.length -1; idx >= 0; idx--) {
        //     const num = nums[idx]
        //     suffixArr[idx] = (suffixArr[idx+1] ?? 1) * num
        // }

        // // o(n)
        // const resultArr = nums.map((_, idx) => {
        //     return (prefixArr[idx - 1] ?? 1) * (suffixArr[idx + 1] ?? 1)
        // })
 
        // merge prefix and suffixes in same result array
        // o(n)
        const resultArr = Array.from({length: nums.length}).fill(1) as number[]

        // o(2n)
        let prefix = 1
        for (let idx: number = 0; idx < nums.length; idx++) {
            resultArr[idx] = prefix
            prefix *= nums[idx]
        }
        let suffix = 1
        for (let idx: number = nums.length -1; idx >= 0; idx--) {
            resultArr[idx] = suffix * resultArr[idx]
            suffix *= nums[idx]
        }

        return resultArr
    }
}

const solution = new Solution()
solution.productExceptSelf([1,2,3,4])
