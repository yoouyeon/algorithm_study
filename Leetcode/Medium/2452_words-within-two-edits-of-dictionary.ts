/*
⭐️ 문제 정보 ⭐️
문제 : 2452 - Words Within Two Edits of Dictionary
레벨 : Medium
링크 : https://leetcode.com/problems/words-within-two-edits-of-dictionary
*/

// ANCHOR 2026.04.22 풀이 (15분 소요)
{
  function twoEditWords(queries: string[], dictionary: string[]): string[] {
    // BF 로 풀어봅니다.
    const answer = [];

    for (const query of queries) {
      let isAnswer = false;
      for (const word of dictionary) {
        let diff = 0;
        for (let idx = 0; idx < query.length; idx++) {
          if (query[idx] !== word[idx]) diff++;
        }
        if (diff <= 2) {
          isAnswer = true;
          break;
        }
      }
      if (isAnswer) answer.push(query);
    }

    return answer;
  }
}
