/*
⭐️ 문제 정보 ⭐️
문제 : 2390 - Removing Stars From a String
레벨 : Medium
링크 : https://leetcode.com/problems/removing-stars-from-a-string
*/

// ANCHOR 2026.05.08 풀이 (5분 소요)
function removeStars(s: string): string {
  // star를 순서대로 지워야 하는건가?
  // 태그의 stack을 봐버렸다... stack으로 풀면 되겠구나.

  const stack = [];

  for (const c of s) {
    if (c !== '*') stack.push(c);
    else stack.pop();
  }

  return stack.join('');
}
