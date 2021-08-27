/**计数排序 */
function countSort(arr) {
    var count = arr.length,
        countArr = [];
    if (count <= 1) {
        return arr;
    }
    var min = Math.min.apply(null, arr), //取出最小值
        max = Math.max.apply(null, arr); //取出最大值

    for (var i = min; i <= max; i++) {
        countArr[i] = 0;
    }
    arr.forEach(function(value, key) {
        countArr[value] = countArr[value] + 1;
    });

    var list = [];
    //value是每个元素出现的次数
    countArr.forEach(function(value, key) {
        for (var i = 0; i < value; i++) {
            list.push(key);
        }
    });
    return list;
}

var arr = [20, 0, 12, 21, 90, 80, 39, 34, 87, 35],
    txt = "";

for (var k in arr) {
    txt += arr[k] + " ";
}

console.log("排序前：", txt);
arr = countSort(arr);
txt = "";

for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：", txt);