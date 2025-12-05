/* 
⭐️ 문제 정보 ⭐️
문제 : 12981 - 영어 끝말잇기
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12981
*/

// ANCHOR - 2025.12.05 풀이
function solution(n, words) {
  const wordSet = new Set();
  wordSet.add(words[0]);

  for (let cur = 1; cur < words.length; cur++) {
    if (wordSet.has(words[cur]) || words[cur - 1].at(-1) !== words[cur].at(0)) {
      const loser = (cur % n) + 1;
      const round = parseInt(cur / n) + 1;
      return [loser, round];
    } else {
      wordSet.add(words[cur]);
    }
  }

  return [0, 0];
}
