/**
 * 117. 填充每个节点的下一个右侧节点指针 II
 */
var connect = function(root) {
    if (root === null) {
        return null;
    }
    const queue = [root];
    while (queue.length) {
        const n = queue.length;
        let last = null;
        for (let i = 1; i <= n; ++i) {
            let f = queue.shift();
            if (f.left !== null) {
                queue.push(f.left);
            }
            if (f.right !== null) {
                queue.push(f.right);
            }
            if (i !== 1) {
                last.next = f;
            }
            last = f;
        }
    }
    return root;
};