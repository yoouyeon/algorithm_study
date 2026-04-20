/*
⭐️ 문제 정보 ⭐️
문제 : 977 - Squares of a Sorted Array
레벨 : Easy
링크 : https://leetcode.com/problems/squares-of-a-sorted-array
*/

// ANCHOR 2026.04.20 풀이 (8분 소요)
{
  function sortedSquares1(nums: number[]): number[] {
    // 감소하지 않는 nums배열
    // 각 숫자의 제곱을 감소하지 않는 순서대로 정렬해서 반환하기
    // 1. 그대로 구현한다 (제곱한다 -> 정렬한다) => nlogn => 시간초과가 나겠지 (안났다)
    const answer = [];
    for (const num of nums) {
      answer.push(num ** 2);
    }
    return answer.sort((a, b) => a - b);
  }
}
