/**找出1000以内的完数 */
/**如果一个数恰好等于它的因子之和，这个数就称为'完数' */
var i, sum, k, txt = "";
for (i = 2; i <= 1000; i++) {
    sum = 0;
    for (k = 2; k <= i / 2; k++) {
        if (i % k == 0) {
            sum += k;
        }
    }
    if (sum + 1 == i) {
        txt += i + " ";
    }
}
console.log(txt);