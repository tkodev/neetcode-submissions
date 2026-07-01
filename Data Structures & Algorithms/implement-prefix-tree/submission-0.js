class TrieNode {
    constructor() {
        this.children = new Map()
        this.isLast = false
    }
}

class PrefixTree {
    constructor() {
        this.trie = new TrieNode()
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let curNode = this.trie
        for (const char of prefix) {
            if (!curNode.children.has(char)) return false
            curNode = curNode.children.get(char)
        }
        return true
    }
}
