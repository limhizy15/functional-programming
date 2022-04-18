const log = (something) => console.log(something);
/**
 * generator
 */

function *gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = gen();

log(iter.next());

/**
 * odds
 */
function *infinite(i = 0) {
  while(true) yield i++;
}

function *limit(lim, iterator) {
  for (const a of iterator) {
    // log(a);
    if(a > lim) return;
    yield a;
  }
}

function *odds(l) {
  // log(JSON.stringify(infinite()));
  // for (const b of infinite()) log(b);
  for(const a of limit(l, infinite())) yield a;
}

let iter2 = odds(10);
// log(iter2);
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());

for(const a of iter2) {
  log(a);
}

/**
 * spread
 */
