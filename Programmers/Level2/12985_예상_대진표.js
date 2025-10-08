/* 
⭐️ 문제 정보 ⭐️
문제 : 12985 - 예상 대진표
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12985
*/

function solution(n, a, b) {
  let round = Math.log2(n); // 최종 라운드로 초기화, 줄여나갈 예정
  let [left, right] = [1, n];

  // 이진 탐색
  while (round >= 1) {
    // a와 b의 현재 위치 확인
    const mid = (left + right) / 2;
    const aIsLeft = a <= mid;
    const bIsLeft = b <= mid;
    // 둘이 다른 절반에 있다면 현재 라운드에서 만난다.
    if (aIsLeft !== bIsLeft) return round;
    // 둘이 같은 절반에 있다면 범위 업데이트
    if (aIsLeft) [left, right] = [left, Math.floor(mid)];
    else [left, right] = [Math.floor(mid), right];
    // 라운드 줄이기
    round--;
  }

  return round;
}
