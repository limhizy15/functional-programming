const someObj = {
  eat() {
    // 여기서 this가 뭐임?
    // * eat 함수를 반환함.
    return this;
  }
}

const obj = someObj;

console.log(obj.eat());

/**
 * for .. of
 */
const arr = [2, 3, 4];
for(const a of arr) console.log(a);

/**
 * spread operator
 */
const arr2 = [1, 2, 3];
// const spreadArr = ...arr2;
console.log(...arr2);
