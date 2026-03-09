/*
⭐️ 문제 정보 ⭐️
문제 : 1133 - Last Substring in Lexicographical Order
레벨 : Hard
링크 : https://leetcode.com/problems/last-substring-in-lexicographical-order/
*/

// ANCHOR 2026.03.09 풀이
// https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/6832556/2-approachestypescript-simplification-of-axkj
function lastSubstring(s: string): string {
  // 같은 시작 지점을 갖는 문자열 중에서는 긴게 사전 순으로 더 큰 문자열이 된다.
  // => 시작 지점을 비교해주면 된다. (무조건 답은 suffix)
  let i = 0,
    j = 1;

  // 모든 조합을 비교하기 위해서 끝까지 비교함.
  while (j < s.length) {
    // i와 j 시작지점에서 k길이까지의 문자열을 비교한다.
    let k = 0;
    while (j + k < s.length && i + k < s.length && s[i + k] === s[j + k]) {
      k++;
    }

    // 1. 끝까지 갔다면 더 긴 s[i:]가 더 큼 -> j를 뒤로 옮겨서 새로 비교
    if (j + k === s.length) {
      j += k + 1; // k 사이는 s랑 동일하기 때문에 항상 s[i:]가 더 큼
    }
    // 2. 뒤쪽(j)가 더 크면 i를 j로 업데이트하고 뒤로 옮겨서 새로 비교
    else if (s[i + k] < s[j + k]) {
      const nextI = Math.max(j, i + k);
      i = nextI;
      j = i + 1;
    }
    // 3. 앞쪽(i)가 더 크면 j만 뒤로 옮겨서 새로 비교
    else {
      j += k + 1; // k 사이는 s랑 동일하기 때문에 항상 s[i:]가 더 큼
    }
  }

  // 루프를 돌고 나면 i에 가장 긴 것이 저장된다. (i는 클 때 업데이트된다. (2번경우))
  return s.substring(i);
}
