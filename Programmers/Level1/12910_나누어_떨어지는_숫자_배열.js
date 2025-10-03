/* 
⭐️ 문제 정보 ⭐️
문제 : 12910 - 나누어 떨어지는 숫자 배열
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12910
*/

function solution(arr, divisor) {
  const answer = arr
    .filter((element) => element % divisor === 0)
    .sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}
