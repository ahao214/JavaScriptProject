/**获取规定的排列组合 */
var N = 4,
    num = [];
for (var i = 1; i <= N; i++) {
    num[i] = i;
}

perm(num, i);

function perm(num, i) {
    var j, k, tmp;
    if (i < N) {
        for (j = i; j <= N; j++) {
            tmp = num[j];
            //旋转该区段最右边数字至最左边
            for (k = j; k > i; k--) {
                num[k] = num[k - 1];
            }
            num[i] = tmp;
            perm(num, i + 1);
            //还原
            for (k = i; k < j; k++) {
                num[k] = num[k + 1];
            }
            num[j] = tmp;
        }
    } else { //显示此次排列
        var txt = "";
        for (j = 1; j <= N; j++) {
            txt += num[j] + " ";
        }
        console.log(txt);
    }
}