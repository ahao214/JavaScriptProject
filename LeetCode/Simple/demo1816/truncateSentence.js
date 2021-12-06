/**
 * 1816. 截断句子
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const n = s.length;
    let end = 0,
        count = 0;
    for (let i = 1; i <= n; i++) {
        if (i === n || s[i] === ' ') {
            count++;
            if (count === k) {
                end = i;
                break;
            }
        }
    }
    return s.slice(0, end);
};