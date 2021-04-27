/**牛的数量多少 */
var num = 1;

function bull(n) {
    for (var j = 1; j <= n; j++) {
        if (j >= 4 && j < 15) {
            num++;
            bull(n - j);
        }
        if (j == 20) {
            num--;
        }
    }
    return num;
}
console.log(bull(8));