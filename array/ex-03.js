/*
*
* Exemplo de com usar os metodos nativos do Array
*
*/
const UtilArray = require('./util-array');

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

UtilArray.printList('Lista original: ', numbers);

numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
}

numbers.insertFirstPosition(-1);

numbers.unshift(-2);
numbers.unshift(-4, -3);

numbers.pop();

UtilArray.printList('Lista unshift: ', numbers);

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
        newArray.push(myArray[i]);
      }
  }
  return newArray;
}

Array.prototype.removeFirstPosition = function () {
  for(let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

console.log('Lista remove', numbers);