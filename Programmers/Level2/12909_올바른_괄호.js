/* 
⭐️ 문제 정보 ⭐️
문제 : 12909 - 올바른 괄호
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12909
*/

// ANCHOR 2025.10.04 풀이
function solution2(s) {
  let stackSize = 0;

  for (const c of s) {
    if (c === "(") {
      // 여는 괄호인 경우 스택에 넣는다
      stackSize++; // 괄호 종류가 하나 뿐이므로 직접 스택에 데이터를 넣을 필요가 없음
    } else {
      // 닫는 괄호인 경우 스택에서 뺀다
      if (stackSize === 0) return false;
      stackSize--;
    }
  }

  return stackSize === 0;
}

// ANCHOR 2024.12.19 풀이
function solution1(s) {
  let answer = true;
  let stackSize = 0;

  for (const parentheses of s) {
    if (parentheses === "(") {
      stackSize++;
      continue;
    }
    if (stackSize === 0) {
      answer = false;
      break;
    }
    stackSize--;
  }

  if (stackSize !== 0) answer = false;

  return answer;
}
