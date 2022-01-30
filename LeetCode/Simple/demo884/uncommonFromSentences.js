/*
884. 两句话中的不常见单词
句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。
如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。
给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。
*/

var uncommonFromSentences = function(s1, s2) {
    let freq = new Map();
    freq = insert(s1, freq);
    freq = insert(s2, freq);

    const ans = [];
    for (const entry of freq.entries()) {
        if (entry[1] === 1) {
            ans.push(entry[0]);
        }
    }
    return ans;
};

const insert = (s, freq) => {
    const arr = s.split(" ");
    for (const word of arr) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }
    return freq;
};