const Stack = require('./stack-array');

const stack = new Stack();
console.log('push 1', stack.push(1));
console.log('push 2', stack.push(2));
console.log('push 3', stack.push(3));

console.log('isEmpty', stack.isEmpty());
console.log('peek', stack.peek());

console.log('pop', stack.pop());
console.log('peek', stack.peek());

console.log('pop', stack.pop());
console.log('peek', stack.peek());