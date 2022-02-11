/*
1020. 飞地的数量
给你一个大小为 m x n 的二进制矩阵 grid ，
其中 0 表示一个海洋单元格、1 表示一个陆地单元格。
一次移动是指从一个陆地单元格走到另一个相邻（上、下、左、右）
的陆地单元格或跨过 grid 的边界。

返回网格中无法在任意次数的移动中离开网格边界的陆地单元格的数量。
*/
var numEnclaves = function(grid) {
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

    const dfs = (grid, row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == 0 || visited[row][col]) {
            return;
        }
        visited[row][col] = true;
        for (const dir of dirs) {
            dfs(grid, row + dir[0], col + dir[1]);
        }
    };

    for (let i = 0; i < m; i++) {
        dfs(grid, i, 0);
        dfs(grid, i, n - 1);
    }
    for (let j = 1; j < n - 1; j++) {
        dfs(grid, 0, j);
        dfs(grid, m - 1, j);
    }
    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                enclaves++;
            }
        }
    }
    return enclaves;
};