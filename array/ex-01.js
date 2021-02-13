/*
*
* Exemplo de como criar array
*
*/

let daysOfWeekI = new Array();

let daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

console.log(daysOfWeek.length);

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(`Dia: ${daysOfWeek[i]}`);
}