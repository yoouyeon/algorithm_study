/*
⭐️ 문제 정보 ⭐️
문제 : 500 - Keyboard Row
레벨 : Easy
링크 : https://leetcode.com/problems/keyboard-row
*/

// ANCHOR 2026.03.25 풀이 (15분 소요)
{
  function findWords1(words: string[]): string[] {
    const rows: Set<string>[] = [new Set('qwertyuiop'), new Set('asdfghjkl'), new Set('zxcvbnm')];
    const ans: string[] = [];

    // words를 돌면서 각 단어가 하나의 row로 입력이 가능한지 확인하기
    for (const word of words) {
      const lowerWord = word.toLowerCase();
      // 첫번재 문자가 있는 row 확인하기
      let rowIdx = 0;
      while (!rows[rowIdx].has(lowerWord[0])) rowIdx++;

      // 이후 문자들이 모두 rowIdx의 row에 있는지 확인한다.
      let isPossible = true;
      for (let idx = 1; idx < lowerWord.length; idx++) {
        if (!rows[rowIdx].has(lowerWord[idx])) {
          isPossible = false;
          break;
        }
      }

      if (isPossible) ans.push(word);
    }

    return ans;
  }

  // 고차함수를 활용한 더 간결한 풀이 (로직은 동일)
  function findWords2(words: string[]): string[] {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].map((r) => new Set(r));

    return words.filter((word) => {
      const lower = word.toLowerCase();
      return rows.some((row) => lower.split('').every((c) => row.has(c)));
    });
  }
}
