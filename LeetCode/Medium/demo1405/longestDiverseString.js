/*
1405. 最长快乐字符串
如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符就是一个「快乐字符串」。
给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：
s 是一个尽可能长的快乐字符串。
s 中 最多 有a 个字母 'a'、b 个字母 'b'、c 个字母 'c' 。
s 中只含有 'a'、'b' 、'c' 三种字母。
如果不存在这样的字符串 s ，请返回一个空字符串 ""。
*/
var longestDiverseString = function(a, b, c) {
    const res = [];
    const arr = [
        [a, 'a'],
        [b, 'b'],
        [c, 'c']
    ];

    while (true) {
        arr.sort((a, b) => b[0] - a[0]);
        let hasNext = false;
        for (const [i, [c, ch]] of arr.entries()) {
            if (c <= 0) {
                break;
            }
            const m = res.length;
            if (m >= 2 && res[m - 2] === ch && res[m - 1] === ch) {
                continue;
            }
            hasNext = true;
            res.push(ch);
            arr[i][0]--;
            break;
        }
        if (!hasNext) {
            break;
        }
    }

    return res.join('');
};