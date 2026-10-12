/*
⭐️ 문제 정보 ⭐️
문제 : 739 - Daily Temperatures
레벨 : Medium
링크 : https://leetcode.com/problems/daily-temperatures/
*/

// ANCHOR 2026.10.12 풀이 (11분 소요)
function dailyTemperatures3(temperatures: number[]): number[] {
  // Monotonic Stack -> 이걸 생각해내는게 매번 힘든 것 같음;
  // "각 원소마다 다음에 오는 더 큰(작은) 원소"를 찾는 문제면 Monotonic Stack 먼저 떠올리기
  // 비슷한 문제: 496(Next Greater Element I), 901(Online Stock Span), 84(Largest Rectangle in Histogram)
  const stack: number[] = [];
  const answer: number[] = Array(temperatures.length).fill(0);

  for (let idx = 0; idx < temperatures.length; idx++) {
      while (stack.length > 0 && temperatures[stack.at(-1)!] < temperatures[idx]) {
          const prev = stack.pop()!;
          answer[prev] = idx - prev;
      }
      stack.push(idx);
  }

  return answer;
};

// ANCHOR 2026.03.25 풀이 (18분 소요)
{
  function dailyTemperatures1(temperatures: number[]): number[] {
    const stack: number[][] = []; // [day, temperature]
    const ans: number[] = new Array(temperatures.length).fill(0);

    for (let day = 0; day < temperatures.length; day++) {
      const temperature = temperatures[day];
      while (stack.length !== 0 && stack[stack.length - 1][1] < temperature) {
        ans[stack[stack.length - 1][0]] = day - stack[stack.length - 1][0];
        stack.pop();
      }
      stack.push([day, temperature]);
    }

    return ans;
  }

  // index만 저장하는 것도 방법
  function dailyTemperatures2(temperatures: number[]): number[] {
    const stack: number[] = []; // index only
    const ans = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
        const j = stack[stack.length - 1];
        stack.pop();
        ans[j] = i - j;
      }
      stack.push(i);
    }

    return ans;
  }
}
