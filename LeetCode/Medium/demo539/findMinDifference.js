/*
539. 最小时间差
给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，
找出列表中任意两个时间的最小时间差并以分钟数表示。
*/
var findMinDifference = function(timePoints) {
    timePoints.sort();
    let ans = Number.MAX_VALUE;
    let t0Minutes = getMinutes(timePoints[0]);
    let preMinutes = t0Minutes;
    for (let i = 1; i < timePoints.length; ++i) {
        const minutes = getMinutes(timePoints[i]);
        ans = Math.min(ans, minutes - preMinutes); // 相邻时间的时间差
        preMinutes = minutes;
    }
    ans = Math.min(ans, t0Minutes + 1440 - preMinutes); // 首尾时间的时间差
    return ans;
};

const getMinutes = (t) => {
    return ((t[0].charCodeAt() - '0'.charCodeAt()) * 10 + (t[1].charCodeAt() - '0'.charCodeAt())) * 60 + (t[3].charCodeAt() - '0'.charCodeAt()) * 10 + (t[4].charCodeAt() - '0'.charCodeAt());
};