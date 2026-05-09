/*
⭐️ 문제 정보 ⭐️
문제 : 394 - Decode String
레벨 : Medium
링크 : https://leetcode.com/problems/decode-string
*/

// ANCHOR 2026.05.09 풀이 (37분 소요)
function decodeString(s: string): string {
  const stack: [number, string][] = [];

  let currentNum = 0;
  let currentstr = '';

  for (const c of s) {
    if (!isNaN(Number(c))) currentNum = currentNum * 10 + Number(c);
    else if (c === '[') {
      stack.push([currentNum, currentstr]);
      currentNum = 0;
      currentstr = '';
    } else if (c === ']') {
      const [num, str] = stack.pop() as [number, string];
      currentstr = str + currentstr.repeat(num);
    } else {
      currentstr += c;
    }
  }

  return currentstr;
}
