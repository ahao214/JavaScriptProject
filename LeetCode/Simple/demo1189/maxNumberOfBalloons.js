/*
1189. “气球” 的最大数量
给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
*/
var maxNumberOfBalloons = function(text) {
    const cnt = new Array(5).fill(0);
    for (const ch of text) {
        if (ch === 'b') {
            cnt[0]++;
        } else if (ch === 'a') {
            cnt[1]++;
        } else if (ch === 'l') {
            cnt[2]++;
        } else if (ch === 'o') {
            cnt[3]++;
        } else if (ch === 'n') {
            cnt[4]++;
        }
    }
    cnt[2] = Math.floor(cnt[2] / 2);
    cnt[3] = Math.floor(cnt[3] / 2);
    return _.min(cnt);
};