function insertSort(arr) {
    var tmp;
    for (var i = 1, len = arr.length; i < len; i++) {
        tmp = arr[i];
        //内层循环，控制比较并插入元素值
        for (var j = i - 1; j >= 0; j--) {
            if (tmp < arr[j]) {
                arr[j + 1] = arr[j]
                arr[j] = tmp;
            } else {
                break;
            }
        }
    }
    return arr;
}

var arr = [20, 0, 12, 21, 90, 80, 39, 34, 87, 35],
    txt = "";

for (var k in arr) {
    txt += arr[k] + " ";
}


console.log("排序前：", txt);

arr = insertSort(arr);
txt = "";

for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：", txt);


function insertSort2(arr) {
    var key, left, right, middle;
    for (var i = 1; i < arr.length; i++) {
        key = arr[i];
        left = 0;
        right = i - 1;
        while (left <= right) {
            middle = Math.floor((left + right) / 2);
            if (key < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (var j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    return arr;
}