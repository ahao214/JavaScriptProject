/*
1688. 比赛中的配对次数
给你一个整数 n ，表示比赛中的队伍数。比赛遵循一种独特的赛制：

如果当前队伍数是 偶数 ，那么每支队伍都会与另一支队伍配对。总共进行 n / 2 场比赛，
且产生 n / 2 支队伍进入下一轮。
如果当前队伍数为 奇数 ，那么将会随机轮空并晋级一支队伍，其余的队伍配对。
总共进行 (n - 1) / 2 场比赛，且产生 (n - 1) / 2 + 1 支队伍进入下一轮。
返回在比赛中进行的配对次数，直到决出获胜队伍为止。
*/
var numberOfMatches = function(n) {
    let ans = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            ans += Math.floor(n / 2);
            n /= 2;
        } else {
            ans += Math.floor((n - 1) / 2);
            n = Math.floor((n - 1) / 2) + 1;
        }
    }
    return ans;
};