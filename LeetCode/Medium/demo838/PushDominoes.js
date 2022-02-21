/*
838. 推多米诺
n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。

每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。

就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。

给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：

dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
返回表示最终状态的字符串。
*/
var pushDominoes = function(dominoes) {
    const s = [...dominoes];
    let n = s.length,
        i = 0;
    let left = 'L';
    while (i < n) {
        let j = i;
        while (j < n && s[j] == '.') { // 找到一段连续的没有被推动的骨牌
            j++;
        }
        const right = j < n ? s[j] : 'R';
        if (left === right) { // 方向相同，那么这些竖立骨牌也会倒向同一方向
            while (i < j) {
                s[i++] = right;
            }
        } else if (left === 'R' && right === 'L') { // 方向相对，那么就从两侧向中间倒
            let k = j - 1;
            while (i < k) {
                s[i++] = 'R';
                s[k--] = 'L';
            }
        }
        left = right;
        i = j + 1;
    }
    return s.join('');
};