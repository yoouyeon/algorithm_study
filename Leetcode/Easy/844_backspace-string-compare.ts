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

  function backspaceCompare2(s: string, t: string): boolean {
    // 2. 투포인터의 향기 (추가 공간을 사용하지 말라 했으므로)
    // 그런데 #을 처리하면서 해야 하기 때문에 앞에서부터 처리하면 복잡해질듯
    // ... 그래서 뒤에서부터 보기로 했습니다.

    let sPos = s.length - 1;
    let tPos = t.length - 1;
    let sBackspace = 0; // 현재 시점에 얼마나 지워야 하는지
    let tBackspace = 0;

    while (sPos >= 0 || tPos >= 0) {
      while (sPos >= 0) {
        if (s[sPos] === '#') {
          sPos--;
          sBackspace++; // 뒤에서 지워줄것임
        } else if (sBackspace > 0) {
          sPos--; // 지워주고
          sBackspace--; // 지워줘야 할 개수를 감소시킴
        } else break; // 유효문자 발견
      }
      while (tPos >= 0) {
        if (t[tPos] === '#') {
          tPos--;
          tBackspace++; // 뒤에서 지워줄것임
        } else if (tBackspace > 0) {
          tPos--; // 지워주고
          tBackspace--; // 지워줘야 할 개수를 감소시킴
        } else break; // 유효문자 발견
      }

      // 유효문자가 같지 않다면 false
      if (s[sPos] !== t[tPos]) return false;
      // 다음 문자로 넘어가기
      sPos--;
      tPos--;
    }
    // 무사히 반복을 빠져나왔으면 같은 문자열인 것
    return true;
  }
}
