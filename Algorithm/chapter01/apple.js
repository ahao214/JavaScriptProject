/** 有多少个苹果来分赃 */
for (var s = 5;; s++) {
    if (s % 5 == 1) {
        //第一个人拿走五分之一，剩余1
        l = s - Math.round(s / 5) - 1;
        if (l % 5 == 1) {
            //第一个人拿走五分之一，剩余q
            q = l - Math.round(l / 5) - 1;
            if (q % 5 == 1) {
                /** 第一个人拿走五分之一，剩余w */
                w = q - Math.round(q / 5) - 1;
                if (w % 5 == 1) {
                    //第一个人拿走五分之一，剩余x
                    x = w - Math.round(w / 5) - 1;
                    if (x % 5 == 1) {
                        /** 第一个人拿走五分之一，剩余y */
                        y = x - Math.round(x / 5) - 1;
                        if (y % 5 == 1) {
                            console.log(s);
                            break;
                        }
                    }

                }
            }
        }
    }
}