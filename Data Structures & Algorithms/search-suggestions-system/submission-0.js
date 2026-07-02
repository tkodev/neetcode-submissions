class TrieNode {
    constructor () {
        this.children = new Map()
        this.isLast = false
        this.suggestions = []
    }
}

class TrieIndex {
    constructor () {
        // space: o(n * m) where n = number of products and m = max length of product
        this.trie = new TrieNode()
    }
    add (word) {
        // time: o(n) where n = number of chars in word
        let curNode = this.trie
        for (const char of word) {
            if (!curNode.children.has(char)) {
                curNode.children.set(char, new TrieNode())
            }
            curNode = curNode.children.get(char)
            // cache up to 3 suggestions on the way down
            if (curNode.suggestions.length < 3) {
                curNode.suggestions.push(word)
            }
        }
        curNode.isLast = true
    }
    search (word) {
        // time: o(n) where n = number of chars in word
        const result = []
        let curNode = this.trie
        for (const char of word) {
            if (curNode) curNode = curNode.children.get(char) ?? null
            result.push(curNode ? curNode.suggestions : [])
        }
        return result
    }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    // time: o(logn * n * m * w) where n = number of products and m = number of chars in biggest product, w = max word length of products
    const index = new TrieIndex()
    products.sort()
    for (const product of products) {
        index.add(product)
    }
    return index.search(searchWord)
};