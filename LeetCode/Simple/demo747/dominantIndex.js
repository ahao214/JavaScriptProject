/**
 * 747. 至少是其他数字两倍的最大数
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。
请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍
如果是，则返回 最大元素的下标 ，否则返回 -1 。
 * @param {*} nums 
 * @returns 
 */

var dominantIdex = function(nums) {
    let m1 = -1,
        m2 = -1;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > m1) {
            m2 = m1;
            m1 = nums[i];
            index = i;
        } else if (nums[i] > m2) {
            m2 = nums[i];
        }
    }
    return m1 >= m2 * 2 ? index : -1;
};