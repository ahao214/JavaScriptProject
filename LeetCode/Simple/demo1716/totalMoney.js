/**
 * 1716. 计算力扣银行的钱
 * @param {number} n
 * @return {number}
 */

/*
最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。

给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。

*/
//暴力计算
var totalMoney = function(n) {
    let week = 1,
        day = 1;
    let res = 1;
    for (let i = 0; i < n; i++) {
        res += day + week - 1;
        ++day;
        if (day == 8) {
            day = 1;
            ++week;
        }
    }
    return res;
};


var totalMoney2 = function(n) {
    // 所有完整的周存的钱
    const weekNumber = Math.floor(n / 7);
    const firstWeekMoney = Math.floor((1 + 7) * 7 / 2);
    const lastWeekMoney = firstWeekMoney + 7 * (weekNumber - 1);
    const weekMoney = Math.floor((firstWeekMoney + lastWeekMoney) * weekNumber / 2);
    // 剩下的不能构成一个完整的周的天数里存的钱
    const dayNumber = n % 7;
    const firstDayMoney = 1 + weekNumber;
    const lastDayMoney = firstDayMoney + dayNumber - 1;
    const dayMoney = Math.floor((firstDayMoney + lastDayMoney) * dayNumber / 2);
    return weekMoney + dayMoney;
};