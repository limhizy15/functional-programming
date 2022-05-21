/**
 * map
 */
const people = [
  {name: 'heeji', age: 27},
  {name: 'unhee', age: 30},
]

const map = (f, iter) => {
  for(const a of iter) {
    console.log(f(a));
  }
}

(map((b) => b.name, people));

function *testGen() {
  yield 1;
  yield 3;
  yield 5;
}

console.log(testGen()); // result: Generator
