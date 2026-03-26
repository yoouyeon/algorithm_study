/*
⭐️ 문제 정보 ⭐️
문제 : 575 - Distribute Candies
레벨 : Easy
링크 : https://leetcode.com/problems/distribute-candies
*/

// ANCHOR 2026.03.26 풀이 (7분 소요)
function distributeCandies(candyType: number[]): number {
  // 사탕 종류가 m가지
  // n / 2개의 사탕을 먹을 수 있을 때 최대 몇개의 사탕을 먹을 수 있을까
  // 단순히 candyType을 set에 넣어서 종류를 구한 뒤에 n/2개를 뽑아낼수가 없음
  // [1, 2, 3, 4] 일 때 ... 괜찮은데?
  // [6, 6, 6, 6] 일 때 ... 괜찮은데?
  // candyType을 set에 넣는다 -> 종류의 개수 확인
  // n / 2보다 크면, n/2만큼 먹으면 됨
  // n / 2보다 작으면, 종류의 개수만큼을 반환
  // 역시 easy문제구나...
  const set = new Set(candyType);
  const halfN = Math.floor(candyType.length / 2);

  if (set.size < halfN) return set.size;
  return halfN;
}
