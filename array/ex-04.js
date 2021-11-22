/*
*
* Exemplo de com usar os metodos nativos do Array
* includes | sort
*
*/
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('includes number 9: ',numbers.includes(9));

const friends = [
  { name: 'Luiz Savio', age: 20 },
  { name: 'Paulo Italo', age: 32 },
  { name: 'Deivid Linz', age: 18 },
];

console.log('sort friends: ', friends.sort((a, b) => a.age - b.age));