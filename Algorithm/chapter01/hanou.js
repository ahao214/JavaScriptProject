// 移动多少盘子才能完成汉诺塔游戏

function hanou(n, x, y, z) {
    if (n == 1) {
        console.log("移动盘1从" +
            x + "到" + z);
    } else {
        hanou(n - 1, x, z, y);
        console.log("移动盘" + n + "从" + x + "到" + z);
        hanou(n - 1, y, x, z);
    }
}

hanou(3, "A", "B", "C");