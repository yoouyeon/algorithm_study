/*
문제 : 2665 - Counter II
난이도 : Easy
링크 : https://leetcode.com/problems/counter-ii/
*/

// ANCHOR 2026.10.17 풀이 (1분 소요)
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
  let counter = init;
  return {
      increment: () => ++counter,
      decrement: () => --counter,
      reset: () => {
          counter = init;
          return counter;
      }
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
