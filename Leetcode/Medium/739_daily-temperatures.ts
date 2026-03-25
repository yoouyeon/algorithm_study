/*
⭐️ 문제 정보 ⭐️
문제 : 739 - Daily Temperatures
레벨 : Medium
링크 : https://leetcode.com/problems/daily-temperatures/
*/

// ANCHOR 2026.03.25 풀이 (18분 소요)
function dailyTemperatures(temperatures: number[]): number[] {
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
