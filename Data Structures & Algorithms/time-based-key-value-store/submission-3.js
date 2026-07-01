class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        // time: o(1)
        // space: o(n * m), where n = unique keys and m = unique timestamp entries
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [[timestamp, value]])
        } else {
            this.keyStore.get(key).push([timestamp, value])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        // brute force = o(n) where n = number of unique timestamps per current key
        // optimal time: o(logn) 
        const values = this.keyStore.get(key) || []
        
        let left = 0
        let right = values.length - 1
        let result = ""

        while (left <= right) { 
            const mid = Math.floor((left + right) / 2)
            const [midTimestamp, midData] = values[mid] ?? []
            if (midTimestamp <= timestamp) {
                result = midData
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return result
    }
}
