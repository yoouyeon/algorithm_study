/*
⭐️ 문제 정보 ⭐️
문제 : 844 - Backspace String Compare
레벨 : Easy
링크 : https://leetcode.com/problems/backspace-string-compare
*/

// ANCHOR 2026.04.20 풀이 (9분 소요)
{
  function backspaceCompare1(s: string, t: string): boolean {
    // 1. 실제로 문자열을 만들어줘도 큰 상관은 없을 것 같음
    // 리트코드가 더 효율적인 풀이를 요구했기때문에 그것도 한번 고민해보겠습니다
    const sArr = [];
    const tArr = [];
    for (const c of s) {
      if (c !== '#') sArr.push(c);
      else sArr.pop();
    }
    for (const c of t) {
      if (c !== '#') tArr.push(c);
      else tArr.pop();
    }

    return sArr.join('') === tArr.join('');
  }
}
