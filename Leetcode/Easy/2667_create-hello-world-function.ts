/*
⭐️ 문제 정보 ⭐️
문제 : 2667 - Create Hello World Function
레벨 : Easy
링크 : https://leetcode.com/problems/create-hello-world-function
*/

// ANCHOR 2026.06.18 풀이 (1분 소요)
function createHelloWorld() {
  return function (...args): string {
    return 'Hello World';
  };
}
