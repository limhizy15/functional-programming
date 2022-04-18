console.log('hi');

const arr = [2, 3, 4];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next())
iterator.next();
