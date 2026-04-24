/*
⭐️ 문제 정보 ⭐️
문제 : 2833 - Furthest Point From Origin
레벨 : Easy
링크 : https://leetcode.com/problems/furthest-point-from-origin
*/

// ANCHOR 2026.04.24 풀이 (6분 소요)
function furthestDistanceFromOrigin(moves: string): number {
  // origin으로부터 가장 멀리 갈 수 있는 거리를 구하는 문제
  // _은 왼쪽 오른쪽 둘 다 갈 수 있어서 저장해뒀다가 최종 답을 구할 때 더해주면 될 듯
  let right = 0;
  let left = 0;
  let pending = 0;

  for (const move of moves) {
    if (move === 'L') left++;
    else if (move === 'R') right++;
    else pending++;
  }

  if (left > right) return left - right + pending;
  return right - left + pending;
}
