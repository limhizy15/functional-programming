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
