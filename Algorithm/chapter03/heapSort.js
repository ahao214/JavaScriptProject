/**堆排序*/
function heapSort(arr) {
    var heapSize = arr.length,
        temp;
    //建堆
    for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        heapif(arr, i, heapSize);
    }
    //堆排序
    for (var j = heapSize - 1; j >= 1; j--) {
        temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;
        heapif(arr, 0, --heapSize);
    }
    return arr;
}


function heapif(arr, x, len) {
    var l = 2 * x + 1,
        r = 2 * x + 2,
        largest = x,
        temp;
    if (l < len && arr[l] > arr[largest]) {
        largest = l;
    }
    if (r < len && arr[r] > arr[largest]) {
        largest = r;
    }
    if (largest != x) {
        temp = arr[x];
        arr[x] = arr[largest];
        arr[largest] = temp;
        heapif(arr, largest, len);
    }
}



var arr = [20, 0, 12, 21, 90, 80, 39, 34, 87, 35],
    txt = "";

for (var k in arr) {
    txt += arr[k] + " ";
}

console.log("排序前：", txt);
arr = heapSort(arr);
txt = "";

for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：", txt);