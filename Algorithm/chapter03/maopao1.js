function maopao(arr) {
    var len = arr.length,
        i, k, tm;
    for (i = 1; i < len; i++) {
        for (k = 0; k < len - i; k++) {
            if (arr[k] > arr[k + 1]) {
                tmp = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = tmp;
            }
        }
    }
    return arr;
}
var arr = [20, 1, 4, 23, 90, 89, 56, 12, 45],
    txt = "";
for (var k in arr) {
    txt += arr[k] + " ";
}
console.log("排序前：" + txt);
arr = maopao(arr);
txt = "";
for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：" + txt);