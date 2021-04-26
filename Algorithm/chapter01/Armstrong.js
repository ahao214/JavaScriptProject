/**怎样才能得到阿姆斯壮数 */

/**方法一：遍历三位数 */
var a, b, c, x, y, txt = "阿姆斯壮数：";
for (var num = 100; num <= 999; num++) {
    a = Math.floor(num / 100);
    b = Math.floor((num % 100) / 10);
    c = num % 10;
    x = a * a * a + b * b * b + c * c * c;
    y = num;
    if (x == num) {
        txt += num + " ";
    }
}

console.log(txt);

/**方法二：穷举数的每一位 */
var number;
for (var i = 1; i <= 9; i++) {
    for (var j = 0; j <= 9; j++) {
        for (var m = 0; m <= 9; m++) {
            number = 100 * i + 10 * j + m;
            if (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(m, 3) == number) {
                console.log("阿姆斯壮数：" +
                    number);
            }
        }
    }
}