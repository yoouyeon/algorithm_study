/*
⭐️ 문제 정보 ⭐️
문제 : 954 - Array of Doubled Pairs
레벨 : Medium
링크 : https://leetcode.com/problems/array-of-doubled-pairs
*/

// ANCHOR 2026.04.11 풀이 (38분 소요)
function canReorderDoubled(arr: number[]): boolean {
  // arr[2 * i + 1] = 2 * arr[2 * i] 로 재배치 할 수 있는지
  // 양옆으로 2배 쌍을 둘 수 있는지를 체크하는거구나...
  const len = arr.length;
  // 맵?
  const map = new Map<number, number>(); // key: 숫자, value: 남은 횟수
  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  // arr[2 * i + 1] = 2 * arr[2 * i] 체크하기
  // 절댓값 오름차순으로 정렬한다. 모든 수가 자신의 "절반"보다 나중에 처리되도록 하기 위함 (arr = [4,-2,2,-4] 처리용;;;)
  arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  let curr = 0;
  for (let i = 0; i < len / 2; i++) {
    while (curr < len && !map.get(arr[curr])) curr++;
    if (curr === len) return false;
    const num = arr[curr];
    const double = num * 2;
    curr++;
    if (!map.get(double)) continue;
    // map에서 제거하기
    map.set(num, (map.get(num) ?? 0) - 1);
    map.set(double, (map.get(double) ?? 0) - 1);
  }

  return [...map.values()].every((v) => v === 0);
}

/**
  리뷰
  현재 코드에 버그가 있습니다. !map.get(double)이 true일 때 — 즉 double이 없을
  때 — continue로 넘어가는데, 이렇게 되면 쌍을 찾지 못한 num을 아무 처리 없이
  건너뜁니다.
  if (!map.get(double)) continue;  // double 없으면 실패해야 하는데 그냥 통과 
  false를 반환해야 하는 케이스입니다. => if (!map.get(double)) return false;

  performance
  - 시간복잡도: O(n log n) — 정렬이 지배. 맵 순회는 O(n)이므로 전체 문제 없음
  - 공간복잡도: O(n) — 맵에 최대 n개 항목
  ---
  개선
  curr 포인터 방식 대신 맵의 키를 직접 순회하면 코드가 단순해집니다.
  const keys = [...map.keys()].sort((a, b) => Math.abs(a) - Math.abs(b));
  for (const num of keys) {
      const count = map.get(num)!;
      if (count === 0) continue;
      // ...
  }
  arr을 정렬하면서 동시에 이미 소비된 원소를 curr로 추적하는 구조는 두 가지
  역할이 섞여 있어 읽기 어렵습니다. 맵의 키만 정렬해서 순회하면 더 직관적입니다.
 */
