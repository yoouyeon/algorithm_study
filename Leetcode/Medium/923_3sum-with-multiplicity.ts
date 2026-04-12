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

/**
  ---
  리뷰 (correctness / performance)

  시간복잡도: O(K²) (K = 유니크한 값의 수). 문제 조건상 값 범위가 0~100이므로 K ≤ 101. 실질적으로 상수에 가까운 매우 효율적인 풀이예요.
  잠재적 오버플로우 주의: Case B/C의 조합 계산에서 중간 값이 정수 범위를 넘을 수 있어요.

  // Case B: count가 클 때 count * (count - 1)이 오버플로우될 수 있음
  answer += (((map.get(keys[i]) * (map.get(keys[i]) - 1)) / 2) * map.get(k)) % MOD;

  arr.length가 최대 20000이고 MOD가 10^9+7이므로 count * (count - 1)은 최대 약 4×10^8으로 JS의 안전 정수 범위(2^53) 내에 있어서 이 문제에서는 실제로 터지지 않지만, MOD 연산을 더 엄밀하게 적용하려면 각 곱셈마다 나머지를 취하는 게 안전해요.
  ---
  개선 (elegance / maintainability)

  케이스 분리 방식의 대안: 지금처럼 A/B/C를 별도 루프로 나누는 것도 명확하지만, 정렬된 keys로 j를 i부터 시작하고 k를 j부터 강제하면 단일 이중 루프로도 세 케이스를 한 번에 처리할 수 있어요.

  for (let i = 0; i < keys.length; i++) {
    for (let j = i; j < keys.length; j++) {  // j = i 허용 (Case B, C)
      const k = target - keys[i] - keys[j];
      if (k < keys[j] || !map.has(k)) continue;  // k >= keys[j] 강제

      const ci = map.get(keys[i])!, cj = map.get(keys[j])!, ck = map.get(k)!;

      if (keys[i] === keys[j] && keys[j] === k)       // Case C
        answer += (ci * (ci-1) * (ci-2) / 6) % MOD;
      else if (keys[i] === keys[j] || keys[j] === k)  // Case B
        answer += (ci * (ci-1) / 2 * ck) % MOD;       // (keys[j]===k 일 때는 cj*(cj-1)/2*ci)
      else                                            // Case A
        answer += (ci * cj * ck) % MOD;
    }
  }

  현재 코드도 정확하고 가독성이 좋아서 케이스별로 나눈 구조가 오히려 이해하기 쉽다는 장점도 있어요.
 */
