/* 
⭐️ 문제 정보 ⭐️
문제 : 12973 - 짝지어 제거하기
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12973
*/

// ANCHOR 2025.12.01 풀이
function solution2(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length === 0) {
      stack.push(c);
      continue;
    }
    const top = stack[stack.length - 1];
    if (c === top) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// ANCHOR 2025.10.02 풀이
function isEmpty(stack) {
  return stack.length === 0;
}

function solution1(s) {
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
