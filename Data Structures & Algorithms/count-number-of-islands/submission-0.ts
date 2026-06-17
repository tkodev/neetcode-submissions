class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    isLand(grid: string[][], row: number, col: number): boolean {
        return grid[row]?.[col] === "1"
    }
    bfsSink(grid: string[][], row: number, col:number): void {
        if (!this.isLand(grid, row, col)) return

        const nr = -1
        const nc = 0
        const er = 0
        const ec = 1
        const sr = 1
        const sc = 0
        const wr = 0
        const wc = -1

        const queue = new Queue([[row, col]])
        while (!queue.isEmpty()) {
            const [cellrow, cellcol] = queue.pop()
            if (this.isLand(grid, cellrow, cellcol)) {
                grid[cellrow][cellcol] = "0"
                if (this.isLand(grid, cellrow+nr, cellcol+nc)) queue.push([cellrow+nr, cellcol+nc])
                if (this.isLand(grid, cellrow+er, cellcol+ec)) queue.push([cellrow+er, cellcol+ec])
                if (this.isLand(grid, cellrow+sr, cellcol+sc)) queue.push([cellrow+sr, cellcol+sc])
                if (this.isLand(grid, cellrow+wr, cellcol+wc)) queue.push([cellrow+wr, cellcol+wc])
            }
        }
    }
    numIslands(grid: string[][]): number {
        let islands = 0
        
        for(let row: number = 0; row < grid.length; row++) {
            for(let col: number = 0; col < grid[row].length; col++) {
                if(this.isLand(grid, row,col)) {
                    this.bfsSink(grid, row, col)
                    islands++
                }
            }
        }
        return islands
    }
}
