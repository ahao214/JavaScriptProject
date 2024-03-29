/**
 * 1446. 连续字符
 */

var maxPower = function(s) {
    let ans = 1, cnt = 1;
    for (let i = 1; i < s.length; ++i) {
        if (s[i] == s[i - 1]) {
            ++cnt;
            ans = Math.max(ans, cnt);
        } else {
            cnt = 1;
        }
    }
    return ans;
};
