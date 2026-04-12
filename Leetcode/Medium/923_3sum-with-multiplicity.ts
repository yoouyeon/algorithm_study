/*
⭐️ 문제 정보 ⭐️
문제 : 923 - 3Sum With Multiplicity
레벨 : Medium
링크 : https://leetcode.com/problems/3sum-with-multiplicity
*/

// ANCHOR 2026.04.12 풀이 (39분 소요)
function threeSumMulti(arr: number[], target: number): number {
  const MOD = 10 ** 9 + 7;
  const map = new Map<number, number>(); // 각 숫자가 몇번 등장했는지를 세어주는 map
  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let answer = 0;

  // 원래 arr을 2중 포문으로 순회했었음. 각 숫자의 인덱스까지 배열로 관리해서 결국 TLE가 났음
  // 중복이 다 제거된 keys를 순회하는 식으로...? 해보려고 함.
  const keys = [...map.keys()].sort((a, b) => a - b);
  // case A : 3 수가 모두 다른 경우
  for (let i = 0; i < keys.length - 1; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const k = target - keys[i] - keys[j];
      if (!map.has(k)) continue;
      // 오름차순 고정
      if (!(keys[i] < keys[j] && keys[j] < k)) continue;
      // 조합을 구해주면 됨.
      // console.log("a", keys[i], keys[j], k, "=>", map.get(keys[i]) * map.get(keys[j]) * map.get(k));
      answer += (map.get(keys[i]) * map.get(keys[j]) * map.get(k)) % MOD;
    }
  }
  // case B : 두 수가 같은 경우
  for (let i = 0; i < keys.length; i++) {
    const k = target - keys[i] * 2;
    if (!map.has(k)) continue;
    if (keys[i] === k) continue;
    // console.log("b", keys[i], keys[i], k, "=>", map.get(keys[i]) * (map.get(keys[i]) - 1) / 2 * map.get(k));
    // 조합을 구해준다.
    answer += (((map.get(keys[i]) * (map.get(keys[i]) - 1)) / 2) * map.get(k)) % MOD;
  }
  // case C : 세 수가 모두 같은 경우
  for (let i = 0; i < keys.length; i++) {
    if (target !== keys[i] * 3) continue;
    // 조합을 구해준다.
    const cnt = map.get(keys[i]);
    answer += ((cnt * (cnt - 1) * (cnt - 2)) / 6) % MOD;
  }

  return answer % MOD;
}
