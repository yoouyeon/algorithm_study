/*
⭐️ 문제 정보 ⭐️
문제 : 532 - K-diff Pairs in an Array
레벨 : Medium
링크 : https://leetcode.com/problems/k-diff-pairs-in-an-array
*/

// ANCHOR 2026.04.14 풀이 (25분 소요)
function findPairs(nums: number[], k: number): number {
  // 유니크한 쌍... set?
  // ❌ |nums[i] - nums[j]| == k => nums[i] == k + nums[j] || nums[i] == -k + nums[j]
  // (1, 3) 과 (3, 1)을 동일한 쌍으로 취급한다 (Example 1 참고)
  // ... 그래서 nums[i] == k + nums[j] 하나의 경우의 수만 판단해주면 됨 (;;)
  // ❌  j를 기준으로 탐색. 만약에 i로 가능한 수가 있다면 set에 담는다. => set에 담을 필요도 없음. map이 있으니까 바로 세어주기
  // 아 가능한 수가 있는지를 확인해야 하기 때문에 기존 원소들은 map에 넣어야 함.

  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  let answer = 0;
  for (const num of map.keys()) {
    if (k === 0) {
      const count = map.get(num) ?? 0;
      if (count >= 2) answer++;
    } else {
      const count = map.get(num + k) ?? 0;
      if (count >= 1) answer++;
    }
  }

  return answer;
}
