/**
 * 2.4
 * 
 * if문의 괄호, ||과 &&
 */
console.log('hello')

// if문 안에서 값 할당 가능 
let a;
if(a = 5) console.log(a); // 5
if(!(a = false)) console.log(a); // false

let obj = {};
if(obj.a = 5) console.log(obj.a); // 5
if(obj.b = true) console.log(obj.b); // true

// 익명 or 유명함수를 정의하고 즉시실행하는 것도 가능
if(function () {return true;}()) console.log('what'); // what

/**
 * ||과 &&
 */
const aString = 'heeji';
const bString = '';

console.log(aString || bString); // heeji > a가 true이므로 || 뒤를 보지 않고 리턴
console.log(bString || aString); // heeji > b가 false이므로 || 뒤를 보고 a리턴
console.log(aString && bString);  // '' > a가 true이므로 && 뒤 값을 리턴
console.log(bString && aString); // '' > b가 false이므로 && 뒤를 보지 않고 b값을 리턴...

console.log(0 && 1); // 0이 negative이므로 0을 바로 리턴
console.log(1 && 0); // 1이 positive이므로 && 뒤의 0을 리턴

console.log([] || {}); // []
console.log(Boolean([])); // 놀랍게도 empty array는 true이다..
console.log(Boolean({})); // empty object도 true..
