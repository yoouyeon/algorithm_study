/*
⭐️ 문제 정보 ⭐️
문제 : 1923 - Sentence Similarity III
레벨 : Medium
링크 : https://leetcode.com/problems/sentence-similarity-iii
*/

// ANCHOR 2026.03.02 풀이

function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  // 투포인터 문제.
  // 두 문장의 prefix에서 최대한 일치하는 구간을 찾는다.
  // 두 문장의 suffix에서 최대한 일치하는 구간을 찾는다.
  // prefix와 suffix 길이 합이 둘 중 길이가 더 짧은 길이 이상이면 중간 구간만 다른 것이므로 비슷한 문장이 된다.
  // NOTE : 처음엔 양쪽에서 동시에 조여오는 느낌으로 풀었는데, 그렇게 하면 한 단어로 이루어진 문장을 처리하는 게 복잡해진다.

  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');
  const minLen = Math.min(words1.length, words2.length);

  // 1. prefix 매칭
  let front = 0;
  while (front < minLen && words1[front] === words2[front]) front++;

  // 2. suffix 매칭
  let back = 0;
  while (back < minLen - front && words1[words1.length - 1 - back] === words2[words2.length - 1 - back]) back++;

  // 3. prefix 길이와 suffix 길이의 합이 짧은 문장 길이 이상이면 비슷한 문장
  return front + back >= minLen;
}
