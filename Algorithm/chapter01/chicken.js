/**百钱买百鸡 */
var i, j, k;
for (i = 1; i < 100; i++) {
    for (j = 1; j < 100; j++) {
        for (k = 1; k < 100; k++) {
            if ((i + j + k == 100) && (i * 5 + j * 3 + k / 3 == 100)) {
                console.log("公鸡：", i, '只,母鸡：', j, '只,小鸡：', k, '只');
            }
        }
    }
}