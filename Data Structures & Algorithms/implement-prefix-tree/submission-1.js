class TrieNode {
    constructor() {
        this.children = new Map()
        this.isLast = false
    }
}

class PrefixTree {
    constructor() {
        // space: o(n) where n = number of trienodes in trie
        this.trie = new TrieNode()
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        // time: o(n) where n = chars in word
        let curNode = this.trie
        for (const char of word) {
            if (!curNode.children.has(char)) { 
                curNode.children.set(char, new TrieNode())
            }
            curNode = curNode.children.get(char)
        }
        curNode.isLast = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        // time: o(n) where n = chars in word
        let curNode = this.trie
        for (const char of word) {
            if (!curNode.children.has(char)) return false
            curNode = curNode.children.get(char)
        }
        return curNode.isLast
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        // time: o(n) where n = chars in word
        let curNode = this.trie
        for (const char of prefix) {
            if (!curNode.children.has(char)) return false
            curNode = curNode.children.get(char)
        }
        return true
    }
}
