/* 
⭐️ 문제 정보 ⭐️
문제 : 12909 - 올바른 괄호
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12909
*/

function solution(s) {
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
