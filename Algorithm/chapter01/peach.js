/**猴子吃了多少桃子 */
var s = 0,
    n = 1; //最后一天桃子的数量
for (var i = 1; i < 10; i++) {
    s = (n + 1) * 2;
    n = s;
}
console.log("第一天一共摘了", s, "个桃子");