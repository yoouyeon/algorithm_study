/*
⭐️ 문제 정보 ⭐️
문제 : 2620 - Counter
레벨 : Easy
링크 : https://leetcode.com/problems/counter
*/

// ANCHOR 2026.10.17 풀이 (1분 소요)
function createCounter2(n: number): () => number {
  let counter = n;
  return function() {
      return counter++;
  }
}

// ANCHOR 2026.06.18 풀이 (1분 소요)
function createCounter(n: number): () => number {
  let count = n;
  return function () {
    return n++;
  };
}
