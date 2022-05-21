/**
 * filter
 */

const people = [
  {name: 'heeji', age: 27},
  {name: 'unhee', age: 30},
]

function filter(list, predicate) {
  let newList = [];
  for (const a of list) {
    if (predicate(a)) newList.push(a);
  }
  return newList;
}

console.log(filter(people, v => v.age < 30));
