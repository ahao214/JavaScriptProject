/**希尔排序 */
function shellSort(arr) {
    var len = arr.length,
        gap = 0,
        temp;
    while (gap < len / 5) {
        gap = gap * 5 + 1;
    }

    for (; gap > 0; gap = Math.floor(gap / 5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
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
arr = shellSort(arr);
txt = "";

for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：", txt);