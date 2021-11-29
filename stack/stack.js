module.exports = class Stack {

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if(this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }
}
