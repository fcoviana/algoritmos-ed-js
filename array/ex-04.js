/*
*
* Exemplo de com usar os metodos nativos do Array
* includes | sort | localeCompare
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

function comparePerson(person1, person2) {
  if (person1.age < person2.age) return -1;
  if (person1.age > person2.age) return 1;
  return 0;
}

console.log('sort friends: ', friends.sort(comparePerson));

let names = ['val', 'zena', 'bia', 'ane'];

console.log('sort string: ', names.sort((a, b) => a.localeCompare(b)));