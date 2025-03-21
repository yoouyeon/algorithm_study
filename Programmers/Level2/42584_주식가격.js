/* 
⭐️ 문제 정보 ⭐️
문제 : 42584 - 주식가격
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42584
*/

// 브루트포스 - O(N^2)
function solution_brute_force(prices) {
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

// 스택 - O(N)
function solution_stack(prices) {
  const answer = Array(prices.length).fill(0);
  const idxStack = []; // 가격이 떨어지지 않은 것들의 인덱스를 저장한다.

  for (let idx = 0; idx < prices.length; idx++) {
    while (idxStack.length && prices[idx] < prices[idxStack.at(-1)]) {
      const top = idxStack.pop();
      answer[top] = idx - top;
    }
    idxStack.push(idx);
  }

  // 가격이 계속 떨어지지 않은 것들이 남아있다면 답에 반영해준다.
  while (idxStack.length) {
    const top = idxStack.pop();
    answer[top] = prices.length - top - 1;
  }

  return answer;
}
