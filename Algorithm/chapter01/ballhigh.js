/**球的反弹高度有多高 */
var k = 100,
    sum = 100;
for (var i = 1; i <= 10; i++) {
    k /= 2;
    sum += k;
}
console.log("共经过:", sum, "米，第10次反弹高：", k, "米")