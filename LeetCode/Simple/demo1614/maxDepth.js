/**
 * 1614. 括号的最大嵌套深度
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let ans = 0,
        size = 0;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch == '(') {
            ++size;
            ans = Math.max(ans, size)
        } else if (ch == ')') {
            --size;
        }
    }
    return ans;
};