/*
⭐️ 문제 정보 ⭐️
문제 : 2131 - Longest Palindrome by Concatenating Two Letter Words
레벨 : Medium
링크 : https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words
*/

// ANCHOR 2026.04.10 풀이 (18분 소요)
function longestPalindrome(words: string[]): number {
  // 가장 긴 팰린드롬 만들기
  // 비슷한 문제를 풀어 본 적이 있었음.
  // 양쪽 끝을 배치한 다음에, 홀수인 것들 중에서 가운데에 들어갈 수 있는게 있다면 넣어주면 됨.

  const diffMap = new Map<string, number>();
  const sameSet = new Set<string>(); // 남아있는게 있다면 중간에 하나 넣어주기용.

  let answer = 0;
  for (const word of words) {
    if (word[0] !== word[1]) {
      // 있으면 팰린드롬에 써준다.
      if (diffMap.get(`${word[1]}${word[0]}`)) {
        answer += 4;
        diffMap.set(`${word[1]}${word[0]}`, diffMap.get(`${word[1]}${word[0]}`) - 1);
      }
      // 없으면 맵에 저장
      else {
        diffMap.set(word, (diffMap.get(word) ?? 0) + 1);
      }
    } else {
      if (sameSet.has(word)) {
        answer += 4;
        sameSet.delete(word);
      } else {
        sameSet.add(word);
      }
    }
  }

  // sameSet에 하나 이상 남아있다면 하나 골라서 팰린드롬 중간에 넣어주기
  if (sameSet.size > 0) {
    answer += 2;
  }

  return answer;
}
