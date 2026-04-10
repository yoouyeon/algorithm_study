/*
⭐️ 문제 정보 ⭐️
문제 : 128 - Longest Consecutive Sequence
레벨 : Medium
링크 : https://leetcode.com/problems/longest-consecutive-sequence/
*/

// ANCHOR 2026.04.10 풀이 (14분 소요)
// 며칠 전에 푼 문젠데도 이렇게 오래 걸릴 일인가....
function longestConsecutive(nums: number[]): number {
  // 시작점을 기준으로 갈 수 있는 최대 길이를 구해본다.
  // 중복을 고려하지 않기 때문에 (Example 2 참고) set으로도 충분!
  if (nums.length === 1) return 1;

  const numSet = new Set(nums);
  let answer = 0;
  for (const num of numSet) {
    // 시작점이면
    if (!numSet.has(num - 1)) {
      let cur = num;
      let length = 0;
      while (numSet.has(cur)) {
        cur++;
        length++;
      }
      // 답 업데이트해주기
      answer = Math.max(answer, length);
    }
  }

  return answer;
}

// ANCHOR 2026.03.23 풀이 (15분 소요)
// 문제 파일 생성 전에 미리 풀엇습니다... 한 15분 걸린듯.
function longestConsecutive2(nums: number[]): number {
  if (nums.length === 1) return 1;

  const numSet = new Set(nums);

  let result = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let selectedNum = num;
      let length = 1;
      while (numSet.has(selectedNum + 1)) {
        selectedNum++;
        length++;
      }

      result = Math.max(result, length);
    }
  }

  return result;
}

/**
nums = [100,4,200,1,3,2]

100 -> 다음숫자 찾기 (+1/-1) 없으면 -> 지워도 괜찮다.
*/

// [128] Longest Consecutive Sequence

/**
 * [Idea]
 * O(n)이기 때문에 정렬 방식은 불가능하다고 판단함. => 특별한 방법이 생각이 안나서 일일이 구간을 확인해 주는 방식을 시도했다.
 * 배열을 순회할 때 빠르게 원소를 찾아야 하기 때문에 Set을 이용하기로 함.
 *
 * [Time Complexity]
 * O(n + n) => O(n)
 * - Set 생성: O(n)
 * - for loop: O(n)
 *   for loop 내부에 while loop가 있긴 하지만 "증가하는 구간의 시작점일 때만 실행되기 때문에" (이걸 놓쳐서 시간 초과 났었다..)
 *   각 원소에 접근하는 횟수는 결국 1번뿐.
 *
 * [Space Complexity]
 * O(n)
 * Set을 생성하기 위해 추가로 필요한 공간
 */

function longestConsecutive1(nums: number[]): number {
  const numSet = new Set<number>(nums);
  let longest = 0;

  for (const startNum of numSet) {
    // 증가하는 구간의 시작점인 경우에만 검사한다. (같은 구간을 중복해서 탐색하는 것을 막기)
    // nums.length가 10000인 경우에 뜬 Time Limit Exceeded를 해결하기 위해 추가함...
    if (numSet.has(startNum - 1)) {
      continue;
    }
    let length = 1;
    let currNum = startNum + 1;
    while (numSet.has(currNum)) {
      length++;
      currNum++;
    }
    longest = Math.max(longest, length);
  }

  return longest;
}
