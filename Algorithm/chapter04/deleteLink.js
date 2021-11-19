/**从无序链表中移除重复项 */

//链表结点
function node(id, data) {
    this.id = id; //结点id
    this.data = data; //结点数据
    this.next = null; //下一结点
}

//单链表
function linkList(id, data) {
    this.header = new node(id, data); //链表头结点
}

linkList.prototype = {

}