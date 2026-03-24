/*
⭐️ 문제 정보 ⭐️
문제 : 448 - Find All Numbers Disappeared in an Array
레벨 : Easy
링크 : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
*/

// ANCHOR 2026.03.24 풀이 (9분 소요)
{
  // 풀이 1 - Set 이용
  function findDisappearedNumbers1(nums: number[]): number[] {
    const numSet = new Set(nums);
    const n = nums.length;
    const ret: number[] = [];

    for (let num = 1; num <= n; num++) {
      // set에 숫자가 없으면 빠진 숫자에 추가
      if (!numSet.has(num)) ret.push(num);
    }

    return ret;
  }

  // 풀이 2 - 배열 자체를 이용
  // 추가 공간을 사용하지 않는다는 장점이 있지만 원본 배열을 변경한다는 단점이 있다.
  // 문제에서 허용하긴 했지만 side effect가 발생할 수 있는 풀이이기 때문에 상황에 따라 풀이 1이 더 나을 수 있다.
  function findDisappearedNumbers2(nums: number[]): number[] {
    // nums 배열을 방문 체크용으로 사용하는 방법
    for (const num of nums) {
      const idx = Math.abs(num) - 1;
      if (nums[idx] > 0) nums[idx] *= -1;
    }

    // 양수인 인덱스가 빠진 값이 된다.
    const ret: number[] = [];
    for (let idx = 0; idx < nums.length; idx++) {
      if (nums[idx] > 0) ret.push(idx + 1);
    }
    return ret;
  }
}
