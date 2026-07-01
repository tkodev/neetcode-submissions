class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // time: o(1)
        // space: o(n) where n = number of keys
        if (!this.cache.has(key)) return -1
        const data = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, data)
        return data
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // using a hashmap to store values
        // trimming first key if exceed capacity
        // time: o(1)
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.capacity) {
            const deleteKey = this.cache.keys().next().value
            this.cache.delete(deleteKey)
        }
        this.cache.set(key, value)
    }
}
