/*
⭐️ 문제 정보 ⭐️
문제 : 202 - Happy Number
레벨 : Easy
링크 : https://leetcode.com/problems/happy-number
*/

// ANCHOR 2026.03.19 풀이
function isHappy1(n: number): boolean {
  // 문제 이해하기...
  // n이 행복한지 판단하기 - 판단 방법 :
  // - 어떤 양의 정수로 시작 -> 각 숫자의 제곱의 합으로 바꿔준다.
  // - 위 과정은 숫자가 1이 되어 종료되거나, 아니면 무한반복된다.
  // - 숫자가 1이 되어 멈추는 숫자를 행복한 숫자라 한다.

  // 풀이 아이디어
  // 무한루프가 발생한다는 것 -> 같은 숫자가 반복적으로 등장한다는 것 -> 사이클 감지 -> 토끼와 거북이

  // 다음 숫자 구하기
  function getNext(n: number) {
    let next = 0;

    while (n !== 0) {
      next += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }

    return next;
  }

  let fast = n;
  let slow = n;

  while (fast !== 1) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
    if (fast === 1 || slow === 1) return true;
    if (fast === slow) return false;
  }

  return true;
}
