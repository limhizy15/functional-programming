/**
 * named function
 */
var f1 = function f() {
  // 유명함수의 이름 f는 내부 스코프에서만 참조가 가능 > 안전함.
  console.log(f);
}

f1();

var f2 = f1;
f2();
f1();

// NOTE: f2가 f1을 계속 참조하는 줄 알았는데 아닌듯. f1을 null로 해도 f2는 정상 실행된다.
f1 = null;

f2();
