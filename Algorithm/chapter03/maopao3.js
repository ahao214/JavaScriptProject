function maopao(arr) {
    var low = 0,
        high = arr.length - 1;
    while (low < high) {
        for (var j = low; j < high; j++)
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            --high;
        for (j = high; j > low; j--)
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
            ++low;
    }
    return arr;
}

var arr = [20, 1, 4, 23, 200, 89, 56, 12, 45],
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