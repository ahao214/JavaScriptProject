/**移动最少次数的三色旗 */
var BLUE = "b",
    WHITE = "w",
    RED = "r",
    txt;

function swap(x, y, color) {
    temp = color[x];
    color[x] = color[y];
    color[y] = temp;
}
var color = ['r', 'b', 'r', 'w', 'r', 'r', 'w', 'b', 'b', 'r'],
    wFlag = 0,
    bFlag = 0,
    rFlag = color.length - 1;
txt = "旗子开始的排序：";
for (i = 0; i < color.length; i++) {
    txt += color[i];
}
console.log(txt);
while (wFlag <= rFlag) {
    if (color[wFlag] == WHITE) {
        wFlag++;
    } else if (color[wFlag] == BLUE) {
        swap(bFlag, wFlag, color);
        bFlag++;
        wFlag++;
    } else {
        while (wFlag < rFlag && color[rFlag] == RED) {
            rFlag--;
        }
        swap(rFlag, wFlag, color);
        rFlag--;
    }
}

txt = "排序后的旗子：";
for (i = 0; i < color.length; i++) {
    txt += color[i];
}
console.log(txt);