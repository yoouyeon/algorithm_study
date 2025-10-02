/* 
⭐️ 문제 정보 ⭐️
문제 : 76502 - 괄호 회전하기
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/76502
*/

//ANCHOR 2025.10.02 풀이
function solution2(s) {
  let answer = 0;
  const n = s.length;

  for (let start = 0; start < n; start++) {
    const stack = [];
    let isValid = true;
    for (let offset = 0; offset < n; offset++) {
      // 회전하기
      const c = s[(start + offset) % n];

      // 여는 괄호인 경우 push
      if (c === "(" || c === "[" || c === "{") {
        stack.push(c);
        continue;
      }
      // 스택이 비어있는 경우 다음 회전 문자열을 비교하러 감
      if (stack.length === 0) {
        isValid = false;
        break;
      }
      // 닫는 괄호인 경우 top과 비교
      const top = stack.pop();
      if (c === ")" && top === "(") continue;
      if (c === "]" && top === "[") continue;
      if (c === "}" && top === "{") continue;
      isValid = false;
      break;
    }
    if (isValid && stack.length === 0) answer++;
  }

  return answer;
}

// ANCHOR 2024.02.22 풀이

const bracket = {
  "{": "}",
  "[": "]",
  "(": ")",
};

function isRightBracket(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === "{" || curr === "[" || curr === "(") stack.push(curr);
    else {
      const top = stack.pop();
      if (curr !== bracket[top]) return false;
    }
  }
  return stack.length === 0; // 짝이 맞지 않는 경우는 올바른 괄호가 아니다.
}

function solution1(s) {
  let answer = 0;
  const stringArr = s.split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (isRightBracket(stringArr)) answer++;
    // rotate
    stringArr.push(stringArr.shift());
  }
  return answer;
}
