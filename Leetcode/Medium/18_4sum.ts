/*
⭐️ 문제 정보 ⭐️
문제 : 18 - 4Sum
레벨 : Medium
링크 : https://leetcode.com/problems/4sum
*/

// ANCHOR 2026.03.01 풀이

function fourSum1(nums: number[], target: number): number[][] {
  const answer: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let a = 0; a <= nums.length - 4; a++) {
    // 중복 조합을 제거하기 위해서 같은 원소는 넘긴다.
    if (a !== 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b <= nums.length - 3; b++) {
      // 중복 조합을 제거하기 위해서 같은 원소는 넘긴다.
      if (b !== a + 1 && nums[b] === nums[b - 1]) continue;
      let c = b + 1,
        d = nums.length - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum === target) {
          answer.push([nums[a], nums[b], nums[c], nums[d]]);
          // 중복 조합을 제거하기 위해서 같은 원소는 넘긴다.
          while (c < d && nums[c] === nums[c + 1]) c++;
          while (c < d && nums[d] === nums[d - 1]) d--;
          // 다음 조합 시도
          c++;
          d--;
        } else if (sum < target)
          c++; //합이 더 작을 땐 더 큰 숫자 더하기
        else d--; // 더 클 땐 더 작은 숫자 더하기
      }
    }
  }

  return answer;
}
