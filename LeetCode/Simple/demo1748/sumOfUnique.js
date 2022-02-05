/*
1748. 唯一元素的和
给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。
请你返回 nums 中唯一元素的 和 。
*/

var sumOfUnique = function(nums) {
    const cnt = new Map();
    for (const num of nums) {
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }
    let ans = 0;
    for (const [num, c] of cnt.entries()) {
        if (c == 1) {
            ans += num;
        }
    }
    return ans;
};