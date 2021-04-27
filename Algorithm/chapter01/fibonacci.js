/**斐波那契 */
var k = 12;
k1 = 1; //记录上个月兔子数量
k2 = 0; //记录上上个月兔子数量
sum = 0;
for (var i = 1; i < k; i++) {
    sum = k1 + k2; //当月的兔子总和
    k2 = k1; //上个月的兔子给上上个月记录
    k1 = sum; //当月的兔子给shanggeyue记录
}
console.log(sum)