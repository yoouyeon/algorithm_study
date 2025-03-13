/* 
⭐️ 문제 정보 ⭐️
문제 : 12941 - 최솟값 만들기
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12941
*/

// Greedy
function solution(A, B) {
  const ascending = A.sort((a, b) => a - b);
  const descending = B.sort((a, b) => b - a);

  const answer = ascending.reduce(
    (acc, num, idx) => acc + num * descending[idx],
    0
  );
  return answer;
}
