/*
⭐️ 문제 정보 ⭐️
문제 : 189 - Rotate Array
레벨 : Medium
링크 : https://leetcode.com/problems/rotate-array/
*/

/*
 * [189] Rotate Array
 */

/**
 Do not return anything, modify nums in-place instead.
 */

/**
 * 그냥 풀기
 */
function rotate1(nums: number[], k: number): void {
  for (let count = 0; count < k; count++) {
    const back = nums.pop() as number; // pop한 원소를 도로 넣기 때문에 nums가 비어있는 경우는 없음 -> undefined가 반환되지 않는다.
    nums.unshift(back);
  }
}

/**
 * index 규칙을 찾기 -> 추가 배열 생성해서 복사하기
 */
function rotate2(nums: number[], k: number): void {
  const length = nums.length;

  const rotated = Array(length).fill(0);
  nums.forEach((value, i) => {
    const newIndex = (i + k) % length;
    rotated[newIndex] = value;
  });

  rotated.forEach((newNum, idx) => {
    nums[idx] = newNum;
  });
}

/**
 * 배열을 뒤집어서 In-place로 원소 순서 바꾸기
 * js에는 배열의 일부를 뒤집는 내장 메소드가 없기 때문에 직접 구현해야 한다.
 */
function reverse(nums: number[], startIdx: number, endIdx: number): void {
  while (startIdx < endIdx) {
    [nums[startIdx], nums[endIdx]] = [nums[endIdx], nums[startIdx]];
    startIdx++;
    endIdx--;
  }
}

function rotate3(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n; // n <= k 인 경우 대비

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}
