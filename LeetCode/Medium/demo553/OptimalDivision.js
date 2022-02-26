/*
553. 最优除法
给定一组正整数，相邻的整数之间将会进行浮点除法操作。例如， 
[2,3,4] -> 2 / 3 / 4 。

但是，你可以在任意位置添加任意数目的括号，来改变算数的优先级。
你需要找出怎么添加括号，才能得到最大的结果，并且返回相应的字符串格式的表达式。
你的表达式不应该含有冗余的括号。
*/
var optimalDivision = function(nums) {
    const n = nums.length;
    if (n === 1) {
        return '' + nums[0];
    }
    if (n === 2) {
        return '' + nums[0] + "/" + '' + nums[1];
    }
    const res = [];
    res.push(nums[0]);
    res.push("/(");
    res.push(nums[1]);
    for (let i = 2; i < n; i++) {
        res.push("/");
        res.push(nums[i]);
    }
    res.push(")");
    return res.join('');
};