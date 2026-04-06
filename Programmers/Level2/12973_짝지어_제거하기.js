/*
⭐️ 문제 정보 ⭐️
문제 : 12973 - 짝지어 제거하기
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12973
*/

// ANCHOR 2026.04.06 풀이 (5분 소요)
{
  function solution(s) {
    // 문자열의 길이가 꽤 길기 때문에 직접 제거하는 방법은 절대 비효율적
    // 포인터를 이동시키는 방법도 10초 고민했으나 아님
    // 아무래도 스택을 이용해야 할 것 같다.
    // 서로 인접해야 지울 수 있기 때문에 지울 수 없는 문자들을 스택에 쌓아두고, 현재 문자와 동일한 것들을 제거하는 식으로 하자.

    const stack = [];
    for (const c of s) {
      if (stack.length === 0) stack.push(c);
      else {
        const top = stack[stack.length - 1];
        if (top === c) stack.pop();
        else stack.push(c);
      }
    }

    return stack.length === 0 ? 1 : 0;
  }
}

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
