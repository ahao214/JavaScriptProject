/*
1996. 游戏中弱角色的数量
你正在参加一个多角色游戏，每个角色都有两个主要属性：攻击 和 防御 。给你一个二维整数数组 properties ，其中 properties[i] = [attacki, defensei] 表示游戏中第 i 个角色的属性。
如果存在一个其他角色的攻击和防御等级 都严格高于 该角色的攻击和防御等级，则认为该角色为 弱角色 。更正式地，如果认为角色 i 弱于 存在的另一个角色 j ，那么 attackj > attacki 且 defensej > defensei 。
返回 弱角色 的数量。
*/

//方法一：排序
var numberOfWeakCharacters = function(properties) {
    properties.sort((o1, o2) => {
        return o1[0] === o2[0] ? (o1[1] - o2[1]) : (o2[0] - o1[0]);
    });
    let maxDef = 0;
    let ans = 0;
    for (const p of properties) {
        if (p[1] < maxDef) {
            ans++;
        } else {
            maxDef = p[1];
        }
    }
    return ans;
};

//方法二：单调栈
var numberOfWeakCharacters2 = function(properties) {
    properties.sort((o1, o2) => {
        return o1[0] === o2[0] ? (o2[1] - o1[1]) : (o1[0] - o2[0]);
    });
    let ans = 0;
    const st = [];
    for (const p of properties) {
        while (st.length && st[st.length - 1] < p[1]) {
            st.pop();
            ans++;
        }
        st.push(p[1]);
    }
    return ans;
};