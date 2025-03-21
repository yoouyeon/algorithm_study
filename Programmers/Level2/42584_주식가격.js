/* 
⭐️ 문제 정보 ⭐️
문제 : 42584 - 주식가격
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42584
*/

function solution(prices) {
  const answer = Array(prices.length).fill(0);

  for (let idx = 0; idx < prices.length - 1; idx++) {
    for (let futureIdx = idx + 1; futureIdx < prices.length; futureIdx++) {
      answer[idx]++;
      if (prices[idx] > prices[futureIdx]) {
        break;
      }
    }
  }

  return answer;
}
