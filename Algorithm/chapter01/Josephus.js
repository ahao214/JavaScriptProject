var N = 41,
    M = 3,
    man = [],
    count = 1,
    i = 0,
    pos = -1,
    alive = 3; //想救的人
while (count <= N) {
    do {
        pos = (pos + 1) % N; //环状处理
        if (!man[pos]) {
            i++;
        }
        if (i == M) { //报数为3
            i = 0;
            break;
        }
    } while (1);
    man[pos] = count;
    count++;
}
console.log("约瑟夫排列：", man.join(" "));
var txt = "L 表示要救的" + alive +
    "个人要放的位置:";
for (i = 0; i < N; i++) {
    if (man[i] > (N - alive)) {
        txt += "L";
    } else {
        txt += "D";
    }
    if ((i + 1) % 5 == 0) {
        txt += " ";
    }
}
console.log(txt)