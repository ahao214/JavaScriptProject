/*
1342. 将数字变成 0 的操作次数
给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
*/

var numberOfSteps = function(num) {
    let ret = 0;
    while (num > 0) {
        ret += (num > 1 ? 1 : 0) + (num & 0x01);
        num >>= 1;
    }
    return ret;
};