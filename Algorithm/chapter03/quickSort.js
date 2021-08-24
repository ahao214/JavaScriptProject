/** 快速排序*/
function quickSort(arr) {
    var length = arr.length;
    if (length <= 1) {
        return arr;
    }
    var base_num = arr[0],
        left_array = [],
        right_array = [];
    for (var i = 1; i < length; i++) {
        if (base_num > arr[i]) {
            left_array.push(arr[i]);
        } else {
            right_array.push(arr[i]);
        }
    }
    left_array = quickSort(left_array);
    right_array = quickSort(right_array);
    return left_array.concat([base_num], right_array);
}

var arr = [20, 0, 12, 21, 90, 80, 39, 34, 87, 35],
    txt = "";

for (var k in arr) {
    txt += arr[k] + " ";
}

console.log("排序前：", txt);
arr = quickSort(arr);
txt = "";

for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：", txt);