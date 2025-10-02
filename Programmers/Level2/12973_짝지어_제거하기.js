/* 
⭐️ 문제 정보 ⭐️
문제 : 12973 - 짝지어 제거하기
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12973
*/

function isEmpty(stack) {
  return stack.length === 0;
}

function solution(s) {
  const stack = [];

  // 초기화
  for (const c of s) {
    if (isEmpty(stack)) stack.push(c);
    else {
      const top = stack[stack.length - 1];
      if (c === top) stack.pop();
      else stack.push(c);
    }
  }

  return isEmpty(stack) ? 1 : 0;
}
