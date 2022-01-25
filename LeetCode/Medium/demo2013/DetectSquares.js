/*
2013. 检测正方形
给你一个在 X-Y 平面上的点构成的数据流。设计一个满足下述要求的算法：

添加 一个在数据流中的新点到某个数据结构中。可以添加 重复 的点，并会视作不同的点进行处理。
给你一个查询点，请你从数据结构中选出三个点，使这三个点和查询点一同构成一个 面积为正 的 轴对齐正方形 ，统计 满足该要求的方案数目。
轴对齐正方形 是一个正方形，除四条边长度相同外，还满足每条边都与 x-轴 或 y-轴 平行或垂直。

实现 DetectSquares 类：

DetectSquares() 使用空数据结构初始化对象
void add(int[] point) 向数据结构添加一个新的点 point = [x, y]
int count(int[] point) 统计按上述方式与点 point = [x, y] 共同构造 轴对齐正方形 的方案数。
*/

var DetectSquares = function() {
    this.cnt = new Map();
};

DetectSquares.prototype.add = function(point) {
    const x = point[0],
        y = point[1];
    if (!this.cnt.has(y)) {
        this.cnt.set(y, new Map());
    }
    const yCnt = this.cnt.get(y);
    yCnt.set(x, (yCnt.get(x) || 0) + 1);
};

DetectSquares.prototype.count = function(point) {
    let res = 0;
    let x = point[0],
        y = point[1];
    if (!this.cnt.has(y)) {
        return 0;
    }
    const yCnt = this.cnt.get(y);
    const entries = this.cnt.entries();
    for (const [col, colCnt] of entries) {
        if (col !== y) {
            // 根据对称性，这里可以不用取绝对值
            let d = col - y;
            res += (colCnt.get(x) || 0) * (yCnt.get(x + d) || 0) * (colCnt.get(x + d) || 0);
            res += (colCnt.get(x) || 0) * (yCnt.get(x - d) || 0) * (colCnt.get(x - d) || 0);
        }
    }
    return res;
};