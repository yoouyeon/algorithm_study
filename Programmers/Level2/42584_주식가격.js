/* 
⭐️ 문제 정보 ⭐️
문제 : 42584 - 주식가격
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42584
*/

// ANCHOR 2025.10.03 풀이
function solution2(prices) {
  const answer = new Array(prices.length);
  const stack = [];

  for (let idx = 0; idx < prices.length; idx++) {
    const price = prices[idx];

    // stack이 비어있거나 top의 price가 현재 가격보다 높지 않다면 push
    if (stack.length === 0 || stack[stack.length - 1].price <= price) {
      stack.push({ idx, price });
      continue;
    }

    let top = stack[stack.length - 1];
    while (top && top.price > price) {
      stack.pop();
      answer[top.idx] = idx - top.idx;
      top = stack[stack.length - 1];
    }
    stack.push({ idx, price });
  }

  while (stack.length !== 0) {
    const top = stack.pop();
    answer[top.idx] = prices.length - top.idx - 1;
  }

  return answer;
}

// ANCHOR 2025.03.21 풀이

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
