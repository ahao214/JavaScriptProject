/**
 * 201. 数字范围按位与
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

//位移
var rangeBitwiseAnd = function(left, right) {
    let shift = 0;
    // 找到公共前缀
    while (m < n) {
        m >>= 1;
        n >>= 1;
        ++shift;
    }
    return m << shift;
};