/*
 * [20] Valid Parentheses
 */
const validParenthesesMap = {
  ")": "(",
  "}": "{",
  "]": "[",
} as const;

function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketsList = s.split("");

  for (const bracket of bracketsList) {
    // case 1. 여는 괄호인 경우
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
      continue;
    }
    // case 2. 닫는 괄호인 경우
    // 2-1. 스택이 비어있는 경우 (앞서 등장한 여는 괄호가 없는 경우)
    if (stack.length === 0) {
      return false;
    }
    // 2-1. 짝이 맞지 않는 경우
    if (stack.at(-1) !== validParenthesesMap[bracket]) {
      return false;
    }
    // 짝이 맞는 괄호를 스택에서 pop
    stack.pop();
  }

  // 모든 닫는 괄호를 처리했는데 여전히 여는 괄호가 스택에 남아있는 경우 -> 짝이 맞지 않음
  return stack.length === 0;
}
