/*
⭐️ 문제 정보 ⭐️
문제 : 739 - Daily Temperatures
레벨 : Medium
링크 : https://leetcode.com/problems/daily-temperatures/
*/

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
  ㅍ;
}
