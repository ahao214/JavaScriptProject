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
    },
    clean: function() { //清空链表
        this.header = null;
    },
    getLinkList: function() { //获取链表

    },
    reverse: function() { //对单链表进行逆序

    }
}


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