// [238] Product of Array Except Self

/**
 * [Idea]
 *
 * [Time Complexity]
 *
 * [Space Complexity]
 *
 */
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array<number>(nums.length);

  // answer 배열에 prefix값 설정해주기
  let prefix = 1;
  for (let idx = 0; idx < n; idx++) {
    answer[idx] = prefix;
    prefix *= nums[idx];
  }

  // 각 prefix에 suffix 값 누적해서 곱해주기
  let suffix = 1;
  for (let idx = n - 1; idx >= 0; idx--) {
    answer[idx] *= suffix;
    suffix *= nums[idx];
  }

  return answer;
}
