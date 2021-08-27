/**桶排序 */
function bucketSort(arr) {

}


var arr = [20, 0, 12, 21, 90, 80, 39, 34, 87, 35],
    txt = "";

for (var k in arr) {
    txt += arr[k] + " ";
}

console.log("排序前：", txt);
arr = bucketSort(arr);
txt = "";

for (k in arr) {
    txt += arr[k] + " ";
}
console.log("排序后：", txt);