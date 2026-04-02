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

// ANCHOR 2026.04.02 풀이 (19분 소요)
function solution(n, words) {
  const wordSet = new Set();
  const roundCount = new Array(n).fill(0);
  wordSet.add(words[0]);
  roundCount[0] = 1;

  for (let idx = 1; idx < words.length; idx++) {
    const player = idx % n;
    const word = words[idx];
    const lastWord = words[idx - 1];
    roundCount[player]++;
    if (wordSet.has(word) || lastWord[lastWord.length - 1] !== word[0]) return [player + 1, roundCount[player]];
    wordSet.add(word);
  }

  return [0, 0];
}
