/**
 * 1610. 可见点的最大数目
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */

//二分查找
var visiblePoints = function(points, angle, location) {
    let sameCnt = 0;
    const polarDegrees = [];
    let locationX = location[0];
    let locationY = location[1];
    for (let i = 0; i < points.length; ++i) {
        const x = points[i][0];
        const y = points[i][1];
        if (x === locationX && y === locationY) {
            sameCnt++;
            continue;
        }
        const degree = Math.atan2(y - locationY, x - locationX);
        polarDegrees.push(degree);
    }
    polarDegrees.sort((a, b) => a - b);

    const m = polarDegrees.length;
    for (let i = 0; i < m; ++i) {
        polarDegrees.push(polarDegrees[i] + Math.PI * 2);
    }

    let maxCnt = 0;
    const toDegree = angle * Math.PI / 180;
    for (let i = 0; i < m; ++i) {
        const iteration = binarySearch(polarDegrees, polarDegrees[i] + toDegree, false);
        maxCnt = Math.max(maxCnt, iteration - i);
    }
    return maxCnt + sameCnt;
};

const binarySearch = (nums, target, lower) => {
    let left = 0,
        right = nums.length - 1;
    let ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};