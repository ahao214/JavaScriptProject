/*
2104. 子数组范围和
给你一个整数数组 nums 。nums 中，子数组的 范围 是子数组中最大元素和最小元素的差值。

返回 nums 中 所有 子数组范围的 和 。

子数组是数组中一个连续 非空 的元素序列。
*/
//方法一：遍历子数组
var subArrayRanges = function(nums) {
    const n = nums.length;
    let ret = 0;
    for (let i = 0; i < n; i++) {
        let minVal = Number.MAX_VALUE,
            maxVal = -Number.MAX_VALUE;
        for (let j = i; j < n; j++) {
            minVal = Math.min(minVal, nums[j]);
            maxVal = Math.max(maxVal, nums[j]);
            ret += maxVal - minVal;
        }
    }
    return ret;
};

//方法二：单调栈
var subArrayRanges = function(nums) {
    const n = nums.length;
    const minLeft = new Array(n).fill(0);
    const minRight = new Array(n).fill(0);
    const maxLeft = new Array(n).fill(0);
    const maxRight = new Array(n).fill(0);
    let minStack = [];
    let maxStack = [];
    for (let i = 0; i < n; i++) {
        while (minStack.length && nums[minStack[minStack.length - 1]] > nums[i]) {
            minStack.pop();
        }
        minLeft[i] = minStack.length === 0 ? -1 : minStack[minStack.length - 1];
        minStack.push(i);

        // 如果 nums[maxStack[maxStack.length - 1]] == nums[i], 那么根据定义，
        // nums[maxStack[maxStack.length - 1]] 逻辑上小于 nums[i]，因为 maxStack[maxStack.length - 1] < i
        while (maxStack.length && nums[maxStack[maxStack.length - 1]] <= nums[i]) {
            maxStack.pop();
        }
        maxLeft[i] = maxStack.length === 0 ? -1 : maxStack[maxStack.length - 1];
        maxStack.push(i);
    }
    minStack = [];
    maxStack = [];
    for (let i = n - 1; i >= 0; i--) {
        // 如果 nums[minStack[minStack.length - 1]] == nums[i], 那么根据定义，
        // nums[minStack[minStack.length - 1]] 逻辑上大于 nums[i]，因为 minStack[minStack.length - 1] > i
        while (minStack.length && nums[minStack[minStack.length - 1]] >= nums[i]) {
            minStack.pop();
        }
        minRight[i] = minStack.length === 0 ? n : minStack[minStack.length - 1];
        minStack.push(i);

        while (maxStack.length && nums[maxStack[maxStack.length - 1]] < nums[i]) {
            maxStack.pop();
        }
        maxRight[i] = maxStack.length === 0 ? n : maxStack[maxStack.length - 1];
        maxStack.push(i);
    }

    let sumMax = 0,
        sumMin = 0;
    for (let i = 0; i < n; i++) {
        sumMax += (maxRight[i] - i) * (i - maxLeft[i]) * nums[i];
        sumMin += (minRight[i] - i) * (i - minLeft[i]) * nums[i];
    }
    return sumMax - sumMin;
};