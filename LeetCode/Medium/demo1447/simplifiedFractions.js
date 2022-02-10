/*
1447. 最简分数
给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。
*/
var simplifiedFractions = function(n) {
    const ans = [];
    for (let denominator = 2; denominator <= n; ++denominator) {
        for (let numerator = 1; numerator < denominator; ++numerator) {
            if (gcd(numerator, denominator) == 1) {
                ans.push(numerator + "/" + denominator);
            }
        }
    }
    return ans;
};

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};