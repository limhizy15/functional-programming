/**
 * 2.3
 * 
 * call, apply, arguments, bind
 */

function test(a, b, c) {
  console.log(`a b c: ${a} ${b} ${c}`);
  console.log(this); // global 객체 리턴
  console.log(arguments); // {a: 1}의 형태로 인자를 출력
}
test(1);

function test2(a, b, c) {
  b = 100;
  console.log(arguments);
}
test2(1); // args: [1]
test2(1, 20); // [1, 20]이 출력될 거라 생각했지만 [1, 100]이 리턴됨.

var obj1 = {name: 'obj1'};
obj1.test = test;
console.log(obj1.test); // 객체 메서드로 할당
obj1.test(1, 2, 3); // 이 때 this는 obj1객체가 된다.

const obj1_test = obj1.test;
obj1_test(1, 2, 3); // 이 때 this는 Window다. 함수가 어떻게 실행되었는지가 this를 결정하는 요소임

/**
 * 어떻게 정의했느냐 -> 클로저, 스코프 관련 부분을 결정
 * 어떻게 실행했느냐 -> this, arguments를 결정
 */

test.call(obj1, 1, 2, 3); // this => obj1
test.call(10000, 1, 2, 3); // this => Number(10000)
