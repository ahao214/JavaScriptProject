/*
1380. 矩阵中的幸运数
给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

幸运数是指矩阵中满足同时下列两个条件的元素：

在同一行的所有元素中最小
在同一列的所有元素中最大
*/
var luckyNumbers = function(matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    const ret = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let isMin = true,
                isMax = true;
            for (let k = 0; k < n; k++) {
                if (matrix[i][k] < matrix[i][j]) {
                    isMin = false;
                    break;
                }
            }
            if (!isMin) {
                continue;
            }
            for (let k = 0; k < m; k++) {
                if (matrix[k][j] > matrix[i][j]) {
                    isMax = false;
                    break;
                }
            }
            if (isMax) {
                ret.push(matrix[i][j]);
            }
        }
    }
    return ret;
};