/**杨辉三角 */
var a = [],
    i, j, txt;
for (i = 0; i < 6; i++) {
    a[i] = [];
    a[i][0] = 1;
    a[i][i] = 1;
}
//把第一位和最后一位的值保存在数组中
for (i = 2; i < 6; i++) {
    for (j = 1; j < i; j++) {
        a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
    }
}
//打印
for (i = 0; i < 6; i++) {
    txt = "";
    for (j = 0; j <= i; j++) {
        txt += a[i][j] + " ";
    }
    console.log(txt);
}