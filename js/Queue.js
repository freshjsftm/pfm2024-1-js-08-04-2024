class Queue {
  constructor(...items) {
    this._head = 0;
    this._tail = 0;
    for (const item of items) {
      this.enqueue(item);
    }
  }
  get size() {
    return this._tail - this._head;
  }
  enqueue(item) {
    this[`_${this._tail}`] = item;
    this._tail++;
    return this.size;
  }
  dequeue() {
    if (this.size) {
      const delItem = this[`_${this._head}`];
      delete this[`_${this._head}`];
      this._head++;
      return delItem;
    }
  }
}

const queue1 = new Queue('a',16,false,null);
console.log(queue1.enqueue(45));
console.log(queue1.enqueue([9]));
console.log(queue1.enqueue('qqq'));
console.log(queue1.enqueue(true));
console.log(queue1);
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1);
console.log(queue1.size);
