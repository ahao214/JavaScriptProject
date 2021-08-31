/**如何实现链表的逆序 */

//链表结点
function node(id, name) {
    this.id = id; //结点id
    this.name = name; //结点名称
    this.next = null; //下一结点
}

//单链表
function linkList(id, name) {
    this.header = new node(id, name); //链表头结点
}

linkList.prototype = {
    addLink: function(node) { //添加结点数据
        var current = this.header;
        while (current.next != null) {
            if (current.next.id > node.id) {
                break;
            }
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
    },
    clear: function() { //清空链表
        this.header = null;
    },
    getLinkList: function() { //获取链表
        var current = this.header;
        if (current.next == null) {
            console.log("链表为空")
            return;
        }
        var txt = "";
        while (current.next != null) {
            txt += current.next.name + " ";
            if (current.next.next == null) {
                break;
            }
            current = current.next;
        }
        console.log(txt);
    },
    reverse: function() { //对单链表进行逆序
        var head = this.header;
        //判断链表是否为空
        if (head == null || head.next == null) {
            console.log("链表为空");
            return;
        }
        var pre = null, //前驱结点
            cur = null, //当前结点
            next = null; //后继结点
        //把链表首结点变为尾结点
        cur = head.next;
        next = cur.next;
        cur.next = null;
        pre = cur;
        cur = next;
        //使当前遍历到的结点cur指向其前驱结点
        while (cur.next != null) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = cur.next;
            cur = next;
        }
        //结点最后一个结点指向倒数第二个结点
        cur.next = pre;
        //链表的头结点指向原来链表的尾结点
        head.next = cur;
    }
};


var lists = new linkList();
for (var i = 0; i < 8; i++) {
    lists.addLink(new node(i, i));
}

console.log("逆序前：");
lists.getLinkList();
lists.reverse();
console.log("逆序后：");
lists.getLinkList();
//释放链表所占的空间
lists.clear();