/*
 * 559. N 叉树的最大深度
 */


// Definition for a Node.
function Node(val, children) {
    this.val = val;
    this.children = children;
};


//深度优先搜索
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let maxChildDepth = 0;
    const children = root.children;
    for (const child of children) {
        const childDepth = maxDepth(child);
        maxChildDepth = Math.max(maxChildDepth, childDepth);
    }
    return maxChildDepth + 1;
};

//广度优先搜索
var maxDepth2 = function(root) {
    if (!root) {
        return 0;
    }
    const queue = [];
    queue.push(root);
    let ans = 0;
    while (queue.length) {
        let size = queue.length;
        while (size > 0) {
            const node = queue.shift();
            const children = node.children;
            for (const child of children) {
                queue.push(child);
            }
            size--;
        }
        ans++;
    }
    return ans;
};