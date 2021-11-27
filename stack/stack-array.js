module.exports = class StackArray {
  #items = [];

  push(element) {
    this.#items.push(element);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.#items = [];
  }

  size() {
    return this.#items.length;
  }
}
