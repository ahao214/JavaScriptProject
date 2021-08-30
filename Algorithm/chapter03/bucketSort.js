/**桶排序 */
function bucketSort(arr, num) {
    var len = arr.length;
    if (len <= 1) {
        return arr;
    }
    var buckets = [0],
        result = [],
        min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr),
        space = Math.ceil((max - min + 1) / num), //桶的数量
        k, index;
    for (var j = 0; j < len; j++) {
        index = Math.floor((arr[j] - min) / space); //需要放入的桶的下标
        if (buckets[index]) { //非空桶，执行插入排序
            k = buckets[index].length - 1;
            while (k >= 0 && buckets[index][k] > arr[j]) {
                buckets[index][k + 1] = buckets[index][k];
                k--;
            }
            buckets[index][k + 1] = arr[j];
        } else { //空桶，执行初始化
            buckets[index] = [];
            buckets[index].push(arr[j]);
        }
    }
    var n = 0;
    //将所有的桶合并起来
    while (n < num) {
        result = result.concat(buckets[n]);
        n++;
    }
    return result;

}


var arr = [20, 0, 12, 21, 90, 80, 39, 34, 87, 35],
    txt = "";

for (var k in arr) {
    txt += arr[k] + " ";
}

console.log("排序前：", txt);
arr = bucketSort(arr, 2);
txt = "";

for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：", txt);