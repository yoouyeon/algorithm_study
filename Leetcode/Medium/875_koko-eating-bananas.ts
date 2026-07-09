/*
⭐️ 문제 정보 ⭐️
문제 : 875 - Koko Eating Bananas
레벨 : Medium
링크 : https://leetcode.com/problems/koko-eating-bananas
*/

// ANCHOR 2026.07.09 풀이 (11분 소요)
function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const k = Math.floor((left + right) / 2);
    let total = 0;
    for (const pile of piles) {
      total += Math.ceil(pile / k);
    }
    if (total <= h) right = k;
    else left = k + 1;
  }

  return right;
}
