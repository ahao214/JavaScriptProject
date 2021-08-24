/** 选择排序*/
function selectSort(arr) {
    var len = arr.lenght,
        p, tmp;
    //外层控制轮数
    for (var i = 0; i < len - 1; i++) {
        p = i;
        //内层控制比较次数，比较i后边的元素
        for (var j = i + 1; i < len; j++) {
            if (arr[p] > arr[j]) {
                p = j;
            }
        }
        //如果发现最小值的位置与当前假设的位置i不同，则位置互换
        if (p != i) {
            tmp = arr[p];
            arr[p] = arr[j];
            arr[j] = tmp;
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
arr = selectSort(arr);
txt = "";

for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：", txt);

/**
 * 顺序查找
 * @param arr 数组
 * @param k  要查找的元素
 * @return 成功返回数组下标，失败则返回-1
 */

function seq_sch(arr, k) {
    for (var i = 0, n = arr.length; i < n; i++) {
        if (arr[i] == k) {
            break;
        }
    }
    if (i < n) {
        return i;
    }
    return -1;
}

//顺序查找
var arrseq = [9, 15, 34, 76, 25, 5, 47, 55];
console.log(seq_sch(arrseq, 47));