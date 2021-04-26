function monkeyKing(m, n) {
    //将各个编号放入数组中
    var monkeys = new Array(n + 1)
        .join("0")
        .split("")
        .map(function(value, key) {
            return key + 1;
        });

    /** 只有一个编号就直接返回 */
    if (n == 1) {
        return monkeys[0];
    }

    var i = 0;
    //如果当前只有一个编号，那么其他位置中都不会存在编号
    while (monkeys.length - 2 in monkeys) {
        if ((i + 1) % m == 0) {
            /** 数到第m时，删除该编号，即剔出圈 */
            delete monkeys[i];
        } else {
            /** 将当前编号放到数组末尾并且删除原来位置上的编号 */
            monkeys.push(monkeys[i]);
            delete monkeys[i];
        }
        i++;
    }
    return monkeys[monkeys.length - 1];
}

var monkey = monkeyKing(5, 2);
console.log("最后当大王的猴子的编号是：" + monkey);