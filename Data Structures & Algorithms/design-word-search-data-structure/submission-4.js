class TrieNode {
    constructor () {
        this.children = new Map()
        this.isLast = false
    }
}

class WordDictionary {
    constructor() {
        this.trie = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        console.log({word})
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
        return this.dfsSearch(word, 0, this.trie)
    }

    dfsSearch(word, nodeIdx, rootNode) {
        let curNode = rootNode

        for (let charIdx = nodeIdx; charIdx < word.length; charIdx++) {
            const char = word[charIdx]
            if (char === ".") {
                for (const child of curNode.children.values()) {
                    if (child && this.dfsSearch(word, charIdx + 1, child)) return true
                }
                return false
            } else {
                if (!curNode.children.has(char)) return false
                curNode = curNode.children.get(char)
            }
        }
        return curNode.isLast
    }
}
