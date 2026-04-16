/*
⭐️ 문제 정보 ⭐️
문제 : 3899 - Angles of a Triangle
레벨 : Medium
링크 : https://leetcode.com/problems/angles-of-a-triangle
*/

// ANCHOR 2026.04.16 풀이 (6분 소요)
function internalAngles(sides: number[]): number[] {
  // 삼각형이 가능한지부터 확인한다. - 가장 긴 변의 길이는 나머지 두 변의 길이의 합보다 작아야 한다
  sides.sort((a, b) => a - b);
  if (sides[2] >= sides[0] + sides[1]) return [];

  const answer = [];
  // 3개의 변을 이용해서 삼각형의 각 구하기 - 코사인 법칙
  for (let idx = 0; idx < 3; idx++) {
    const a = sides[idx];
    const b = sides[(idx + 1) % 3];
    const c = sides[(idx + 2) % 3];
    const cos = (b ** 2 + c ** 2 - a ** 2) / (2 * b * c);
    answer.push((Math.acos(cos) * 180) / Math.PI);
  }

  return answer.sort((a, b) => a - b);
}
