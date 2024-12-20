/* 
⭐️ 문제 정보 ⭐️
문제 : 12924 - 숫자의 표현
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12924
*/

function solution(n) {
  let answer = 1; // 자기 자신의 합으로 표현할 수 있으므로 최소 1개

  let curSum = 0;
  const prefixSum = [];
  while (curSum <= n) {
    prefixSum.push(curSum);
    curSum += prefixSum.length;
  }

  // cnt : cnt개의 연속된 자연수의 합으로 n을 표현할 수 있는지 확인
  for (let cnt = 2; cnt < prefixSum.length; cnt++) {
    const baseNum = (n - prefixSum[cnt - 1]) / cnt;
    if (Number.isInteger(baseNum)) answer++;
  }

  return answer;
}
