/*
⭐️ 문제 정보 ⭐️
문제 : 1679 - Max Number of K-Sum Pairs
레벨 : Medium
링크 : https://leetcode.com/problems/max-number-of-k-sum-pairs
*/

// ANCHOR 2026.04.29 풀이 (18분 소요)
function maxOperations(nums: number[], k: number): number {
  const map = new Map(); // key: 숫자, value: 개수
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let count = 0;

  for (const num of map.keys()) {
    if (map.get(num) <= 0) continue;
    if (num * 2 === k) {
      count += Math.floor(map.get(num) / 2);
      map.set(num, 0); // 방문 표시
    } else if ((map.get(k - num) ?? 0) > 0) {
      count += Math.min(map.get(num), map.get(k - num));
      map.set(num, 0);
      map.set(k - num, 0);
    }
  }

  return count;
}
