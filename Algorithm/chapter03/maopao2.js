function maopao(arr) {
    var i = arr.length - 1,
        tmp,
        bool;
    while (i > 0) {
        bool = 0;
        for (var j = 0; j < i; j++)
            if (arr[j] > arr[j + 1]) {
                bool = j;
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        i = bool;
    }
    return arr;
}

var arr = [20, 1, 4, 23, 100, 89, 56, 12, 45],
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