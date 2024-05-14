class ListNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  get data() {
    return this._data;
  }
  set data(value) {
    this._data = value;
  }
}

class DoublyLinkedList {
  constructor(...items) {
    //nodes - array
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const item of items) {
      this.push(item);
    }
  }
  push(item) {
    const listNode = new ListNode(item);
    if (this.length === 0) {
      this.head = listNode;
      this.tail = listNode;
    } else {
      this.tail.next = listNode;
      listNode.prev = this.tail;
      this.tail = listNode;
    }
    return ++this.length;
  }
}

const list1 = new DoublyLinkedList(1, {prop:12}, true);
const list2 = new DoublyLinkedList();

// for (const listItem of list1) {
//   console.log(listItem);
// }
