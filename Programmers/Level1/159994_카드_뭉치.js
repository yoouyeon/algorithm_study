/* 
⭐️ 문제 정보 ⭐️
문제 : 159994 - 카드 뭉치
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/159994
*/

// ANCHOR - 2025.12.04 풀이
function solution2(cards1, cards2, goal) {
  let front1 = 0;
  let front2 = 0;
  let len1 = cards1.length;
  let len2 = cards2.length;

  for (let idx = 0; idx < goal.length; idx++) {
    const target = goal[idx];
    if (front1 < len1 && cards1[front1] === target) front1++;
    else if (front2 < len2 && cards2[front2] === target) front2++;
    else return "No";
  }

  return "Yes";
}

// ANCHOR - 2025.10.05 풀이
function solution1(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  let goalIdx = 0;

  while (goalIdx < goal.length) {
    if (idx1 < cards1.length && cards1[idx1] === goal[goalIdx]) {
      goalIdx++;
      idx1++;
      continue;
    } else if (idx2 < cards2.length && cards2[idx2] === goal[goalIdx]) {
      goalIdx++;
      idx2++;
      continue;
    }
    return "No";
  }

  return "Yes";
}
