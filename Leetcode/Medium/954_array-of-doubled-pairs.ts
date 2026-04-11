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
