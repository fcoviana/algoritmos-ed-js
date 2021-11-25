/*
*
* Exemplo de com usar os metodos nativos do Array
*  indexOf | lastIndexOf | find | findIndex
*
*/
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(12);
numbers.push(13);

console.log('index number 12: ', numbers.indexOf(12));
console.log('index number 100: ', numbers.indexOf(100));

console.log('index number 12: ', numbers.lastIndexOf(12));
console.log('index number 100: ', numbers.lastIndexOf(100));

function multipleOf2(element, index, array) {
  return (element % 2 == 0);
}

console.log('find number: ', numbers.find(multipleOf2));
console.log('findIndex number: ', numbers.findIndex(multipleOf2));

console.log('toString', numbers.toString());
