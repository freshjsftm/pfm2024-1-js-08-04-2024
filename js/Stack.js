class Stack {
  constructor(maxSize, ...items) {
    this._maxSize = maxSize; //check
    this._size = 0;
    for (const item of items) {
      this.push(item);
    }
  }
  get size(){
    return this._size;
  }
  get isEmpty(){
    return this._size ===0;
  }
  top() {
    return this[`_${this._size-1}`] ;
  }
  push(item) {
    if(this._size>=this._maxSize){
      throw new RangeError('stack overflow');
    }
    this[`_${this._size}`] = item; //_0  _1
    this._size++;
    return this._size;
  }
  pop() {
    if(this.isEmpty){
      return;
    }
    const lastItem = this[`_${this._size-1}`];
    delete this[`_${this._size-1}`];
    this._size--;
    return lastItem;
  }
}

const stack1 = new Stack(5, {p:12},['a','z'],'qwert',null, true);
console.log(stack1.isEmpty);
console.log(stack1);
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1);