/*
⭐️ 문제 정보 ⭐️
문제 : 2300 - Successful Pairs of Spells and Potions
레벨 : Medium
링크 : https://leetcode.com/problems/successful-pairs-of-spells-and-potions
*/

// ANCHOR 2026.03.02 풀이
// FEEDBACK
// 이진탐색 종료 후 left가 유효한지 별도로 체크하는 부분을 right 초기값 조정으로 깔끔하게 없앨 수 있다.
// for (const spell of spells) {
//   let left = 0, right = potions.length; // right를 length로 설정

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (spell * potions[mid] >= success) right = mid;
//     else left = mid + 1;
//   }

//   answer.push(potions.length - left); // 항상 유효 (0 포함)
// }
// right = potions.length로 설정하면 "조건을 만족하는 원소가 없을 때 left가 potions.length"가 되어 potions.length
// - left = 0이 자연스럽게 나온다.
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  const answer: number[] = [];
  // spells를 고정시켜두고, 더해서 success 이상이 되는 potion을 찾는 문제.
  // success를 넘어가는 그 지점 이후로는 모두 정답이 될 것이기 때문에, 이진탐색을 쓰겠습니다.
  // 이진탐색을 위한 potions 정렬
  potions.sort((a, b) => a - b);

  // spells 하나하나마다 이진탐색
  for (const spell of spells) {
    let left = 0,
      right = potions.length - 1;

    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      const potion = potions[mid];
      // mid가 큰 경우 -> 범위를 왼쪽으로 옮긴다.
      if (spell * potion >= success) {
        right = mid;
      }
      // mid가 크지 않은 경우 -> 범위를 오른쪽으로 옮긴다.
      else {
        left = mid + 1;
      }
    }

    // 이진탐색을 다 돈 뒤의 left가 실제로 조건을 만족한다면 답으로 넣어준다.
    if (spell * potions[left] >= success) answer.push(potions.length - left);
    else answer.push(0);
  }

  return answer;
}
